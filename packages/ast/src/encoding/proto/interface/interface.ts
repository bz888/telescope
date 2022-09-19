import * as t from '@babel/types';
import { ProtoType, ProtoField } from '@osmonauts/types';
import { identifier, tsPropertySignature, functionDeclaration, makeCommentBlock } from '../../../utils';
import { ProtoParseContext } from '../../context';

import {
    getBaseCreateTypeFuncName,
    getFieldOptionality,
    getOneOfs
} from '../types';

import {
    CreateProtoTypeOptions,
    createProtoTypeOptionsDefaults,
    getDefaultTSTypeFromProtoType,
    getFieldTypeReference,
    getMessageName,
    getTSType
} from '../../types';

const getProtoField = (
    context: ProtoParseContext,
    field: ProtoField,
    options: CreateProtoTypeOptions = createProtoTypeOptionsDefaults
) => {
    let ast: any = null;

    ast = getFieldTypeReference(context, field, options);

    if (field.rule === 'repeated') {
        ast = t.tsArrayType(ast);
    }

    if (field.keyType) {
        ast = t.tsUnionType([
            t.tsTypeLiteral([
                t.tsIndexSignature([
                    identifier('key',
                        t.tsTypeAnnotation(
                            getTSType(context, field.keyType)
                        )
                    )
                ],
                    t.tsTypeAnnotation(ast)
                )
            ])
        ]);
    }

    return ast;
};

export const createProtoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType,
    options: CreateProtoTypeOptions = createProtoTypeOptionsDefaults
) => {
    const oneOfs = getOneOfs(proto);

    // MARKED AS COSMOS SDK specific code
    // optionalityMap is coupled to API requests
    // if a param is found to be a route parameter, we assume it's required
    // if a param is found to be a query parameter, we assume it's optional
    const optionalityMap = {};
    if (context.store.requests[name]) {
        const svc = context.store.requests[name];
        if (svc.info) {
            svc.info.queryParams.map(param => {
                optionalityMap[param] = true;
            })
        }
    }

    const MsgName = getMessageName(name, options);

    // declaration
    const declaration = t.exportNamedDeclaration(t.tsInterfaceDeclaration(
        t.identifier(MsgName),
        null,
        [],
        t.tsInterfaceBody(
            Object.keys(proto.fields).reduce((m, fieldName) => {
                const isOneOf = oneOfs.includes(fieldName);
                const field = proto.fields[fieldName];

                // optionalityMap is coupled to API requests
                const orig = field.options?.['(telescope:orig)'] ?? fieldName;
                let optional = false;
                if (optionalityMap[orig]) {
                    optional = true;
                }

                const fieldNameWithCase = options.useOriginalCase ? orig : fieldName;

                const propSig = tsPropertySignature(
                    t.identifier(fieldNameWithCase),
                    t.tsTypeAnnotation(
                        getProtoField(context, field, options)
                    ),
                    optional || getFieldOptionality(context, field, isOneOf)
                );

                const comments = [];
                if (field.comment) {
                    comments.push(
                        makeCommentBlock(field.comment)
                    );
                }
                if (field.options?.deprecated) {
                    comments.push(
                        makeCommentBlock('@deprecated')
                    );
                }
                if (comments.length) {
                    propSig.leadingComments = comments;
                }

                m.push(propSig)
                return m;
            }, [])
        )
    ));

    const comments = [];

    if (proto.comment) {
        comments.push(makeCommentBlock(proto.comment));
    }

    if (proto.options?.deprecated) {
        comments.push(makeCommentBlock('@deprecated'));
    }

    if (comments.length) {
        declaration.leadingComments = comments;
    }


    return declaration;
};


export const createCreateProtoType = (
    context: ProtoParseContext,
    name: string,
    proto: ProtoType
) => {
    const oneOfs = getOneOfs(proto);

    const fields = Object.keys(proto.fields).map(key => {
        const isOneOf = oneOfs.includes(key);
        const isOptional = getFieldOptionality(context, proto.fields[key], isOneOf)
        return {
            name: key,
            ...proto.fields[key],
            isOptional
        };
    })
        .map(field => {
            return t.objectProperty(
                t.identifier(field.name),
                getDefaultTSTypeFromProtoType(context, field, field.isOptional)
            )
        })


    return functionDeclaration(t.identifier(getBaseCreateTypeFuncName(name)),
        [],
        t.blockStatement([
            t.returnStatement(t.objectExpression(
                [
                    ...fields,
                ]
            ))
        ]), false, false, t.tsTypeAnnotation(
            t.tsTypeReference(t.identifier(name))
        ))
};
