import * as t from '@babel/types';
import { FromJSONMethod } from './index';
import { callExpression, identifier, TypeLong } from '../../../utils';
import { getDefaultTSTypeFromProtoType } from '../../types';
import { ProtoField } from '@subql/x-cosmology-types';

const getPropNames = (field: ProtoField) => {
    const messageProp = field.name;
    const objProp = field.options?.json_name ?? field.name;
    return {
        messageProp,
        objProp
    }
};

export const fromJSON = {

    // OLD: sender: isSet(object.sender) ? String(object.sender) : ""
    // NEW: if (isSet(object.sender)) { obj.sender = String(object.sender) }
    string(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.callExpression(
                        t.identifier('String'),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },

    number(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.callExpression(
                        t.identifier('Number'),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },

    double(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    float(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    int32(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    sint32(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    uint32(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    fixed32(args: FromJSONMethod) {
        return fromJSON.number(args);
    },
    sfixed32(args: FromJSONMethod) {
        return fromJSON.number(args);
    },

    // OLD disableMacros: isSet(object.disableMacros) ? Boolean(object.disableMacros) : false
    // NEW if (isSet(object.disableMacros)) { obj.disableMacros = Boolean(object.disableMacros) }
    bool(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.callExpression(
                        t.identifier('Boolean'),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },

    // OLD int64Value: isSet(object.int64Value) ? Long.fromValue(object.int64Value) : Long.UZERO,
    // NEW if (isSet(object.int64Value)) { obj.int64Value = Long.fromValue(object.int64Value) }
    long(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');
        TypeLong.addUtil(args.context);

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    TypeLong.getFromValueWithArgs(args.context,
                        t.memberExpression(
                            t.identifier('object'),
                            t.identifier(objProp)
                        )
                    )
                )
            )
        )
    },

    int64(args: FromJSONMethod) {
        return fromJSON.long(args);
    },

    // OLD uint64Value: isSet(object.uint64Value) ? Long.fromString(object.uint64Value) : Long.ZERO,
    // NEW if (isSet(object.uint64Value)) { obj.uint64Value = Long.fromString(object.uint64Value) }
    uint64(args: FromJSONMethod) {
        return fromJSON.long(args);
    },

    sint64(args: FromJSONMethod) {
        return fromJSON.long(args);
    },
    fixed64(args: FromJSONMethod) {
        return fromJSON.long(args);
    },
    sfixed64(args: FromJSONMethod) {
        return fromJSON.long(args);
    },

    // signDoc: isSet(object.signDoc) ? SignDocDirectAux.fromJSON(object.signDoc) : undefined,
    type(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        let name = args.context.getTypeName(args.field);
        args.context.addUtil('isSet');

        if (
          !args.context.options.aminoEncoding.useLegacyInlineEncoding &&
          args.context.options.interfaces.enabled &&
          args.context.options.interfaces?.useGlobalDecoderRegistry &&
          args.field.type === 'google.protobuf.Any' &&
          args.field.options['(cosmos_proto.accepts_interface)']
        ) {
          name = 'GlobalDecoderRegistry';
        }

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.callExpression(
                        t.memberExpression(
                            t.identifier(name),
                            t.identifier('fromJSON')
                        ),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },

    // OLD mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0,
    // NEW if (isSet(object.mode)) { obj.mode = signModeFromJSON(object.mode) }
    enum(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');
        const fromJSONFuncName = args.context.getFromEnum(args.field);


        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.callExpression(
                        t.identifier(fromJSONFuncName),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },

    // OLD queryData: isSet(object.queryData) ? bytesFromBase64(object.queryData) : new Uint8Array()
    // NEW if (isSet(object.queryData)) { obj.queryData = bytesFromBase64(object.queryData) }
    bytes(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');
        args.context.addUtil('bytesFromBase64');

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.callExpression(
                        t.identifier('bytesFromBase64'),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },


    // period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined,

    duration(args: FromJSONMethod) {
        const durationFormat = args.context.pluginValue('prototypes.typingsFormat.duration');
        switch (durationFormat) {
            case 'string':
                return fromJSON.durationString(args);
            case 'duration':
            default:
                return fromJSON.type(args);
        }
    },

    // OLD period: isSet(object.period) ? String(object.period) : undefined,
    // NEW if (isSet(object.period)) { obj.period = String(object.period) }
    durationString(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.callExpression(
                        t.identifier('String'),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },

    // periodReset: isSet(object.periodReset) ? fromJsonTimestamp(object.periodReset) : undefined

    timestamp(args: FromJSONMethod) {
        let timestampFormat = args.context.pluginValue(
            'prototypes.typingsFormat.timestamp'
        );
        const env = args.context.pluginValue(
            'env'
        );
        if (!env || env == 'default') {
            timestampFormat = 'timestamp';
        }
        switch (timestampFormat) {
            case 'timestamp':
                return fromJSON.timestampTimestamp(args);
            case 'date':
            default:
                return fromJSON.timestampDate(args);
        }
    },

    timestampTimestamp(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');
        args.context.addUtil('fromJsonTimestamp');

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.callExpression(
                        t.identifier('fromJsonTimestamp'),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },

    timestampDate(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        args.context.addUtil('isSet');

        return t.ifStatement(
            t.callExpression(
                t.identifier('isSet'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    t.newExpression(
                        t.identifier('Date'),
                        [
                            t.memberExpression(
                                t.identifier('object'),
                                t.identifier(objProp)
                            )
                        ]
                    )
                )
            )
        )
    },

    //  labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
    //     [key: string]: string;
    //   }>((acc, [key, value]) => {
    //     acc[key] = String(value);
    //     return acc;
    //   }, {}) : {},

    //   referenceMap: isObject(object.referenceMap) ? Object.entries(object.referenceMap).reduce<{
    //     [key: Long]: Reference;
    //   }>((acc, [key, value]) => {
    //     acc[Number(key)] = Reference.fromJSON(value);
    //     return acc;
    //   }, {}) : {},


    keyHash(args: FromJSONMethod) {
        const { messageProp, objProp } = getPropNames(args.field);
        const keyType = args.field.keyType;
        const valueType = args.field.parsedType.name;

        args.context.addUtil('isObject');

        let fromJSON = null;
        // valueTypeType: string for identifier
        let valueTypeType = valueType;
        switch (valueType) {
            case 'string':
                fromJSON = t.callExpression(
                    t.identifier('String'),
                    [
                        t.identifier('value')
                    ]
                )

                break;
            case 'int32':
            case 'uint32':
                valueTypeType = 'number';
                fromJSON = t.callExpression(
                    t.identifier('Number'),
                    [
                        t.identifier('value')
                    ]
                );

                break;
            case 'int64':
            case 'uint64':
            case 'sint64':
            case 'fixed64':
            case 'sfixed64':
                TypeLong.addUtil(args.context);

                valueTypeType = TypeLong.getPropType(args.context);
                fromJSON = TypeLong.getFromValueWithArgs(args.context,
                    t.tsAsExpression(
                        t.identifier('value'),
                        t.tsUnionType(
                            [
                                t.tsTypeReference(
                                    TypeLong.getPropIdentifier(args.context)
                                ),
                                t.tsStringKeyword()
                            ]
                        )
                    )
                )
                break;
            default:
                fromJSON = t.callExpression(
                    t.memberExpression(
                        t.identifier(valueType),
                        t.identifier('fromJSON')
                    ),
                    [
                        t.identifier('value')
                    ]
                );
        }

        let wrapKey = null;
        let keyTypeType = null;
        switch (keyType) {
            case 'string':
                wrapKey = (a) => a;
                keyTypeType = t.tsStringKeyword();
                break;
            case 'int64':
            case 'uint64':
            case 'sint64':
            case 'fixed64':
            case 'sfixed64':
                wrapKey = (a) => t.callExpression(
                    t.identifier('Number'),
                    [
                        a
                    ]
                );
                TypeLong.addUtil(args.context);

                keyTypeType = t.tsTypeReference(TypeLong.getPropIdentifier(args.context));
                break;
            case 'uint32':
            case 'int32':
                wrapKey = (a) => t.callExpression(
                    t.identifier('Number'),
                    [
                        a
                    ]
                );
                keyTypeType = t.tsTypeReference(t.identifier('number'));
                break;
            default:
                throw new Error('keyHash requires new type. Ask maintainers.');
        }

        return t.ifStatement(
            t.callExpression(
                t.identifier('isObject'),
                [
                    t.memberExpression(
                        t.identifier('object'),
                        t.identifier(objProp)
                    )
                ]
            ),
            t.expressionStatement(
                t.assignmentExpression(
                    '=',
                    t.memberExpression(
                        t.identifier('obj'),
                        t.identifier(messageProp)
                    ),
                    callExpression(
                        t.memberExpression(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('Object'),
                                    t.identifier('entries')
                                ),
                                [
                                    t.memberExpression(
                                        t.identifier('object'),
                                        t.identifier(objProp)
                                    )
                                ]
                            ),
                            t.identifier('reduce')
                        ),
                        [
                            t.arrowFunctionExpression(
                                [
                                    t.identifier('acc'),
                                    t.arrayPattern(
                                        [
                                            t.identifier('key'),
                                            t.identifier('value')
                                        ]
                                    )
                                ],
                                t.blockStatement([
                                    t.expressionStatement(
                                        t.assignmentExpression(
                                            '=',
                                            t.memberExpression(
                                                t.identifier('acc'),
                                                wrapKey(t.identifier('key')),
                                                true
                                            ),
                                            fromJSON
                                        )
                                    ),
                                    t.returnStatement(
                                        t.identifier('acc')
                                    )
                                ])
                            ),
                            t.objectExpression(
                                []
                            )
                        ],
                        t.tsTypeParameterInstantiation(
                            [
                                t.tsTypeLiteral(
                                    [
                                        t.tsIndexSignature(
                                            [
                                                identifier('key', t.tsTypeAnnotation(
                                                    keyTypeType
                                                ))
                                            ],
                                            t.tsTypeAnnotation(
                                                t.tsTypeReference(
                                                    t.identifier(valueTypeType)
                                                )
                                            )
                                        )
                                    ]
                                )
                            ]
                        )
                    )
                )
            )
        )
    },

    //OLD: codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromString(e)) : [],
    //NEW: if (Array.isArray(object?.codeIds)) { obj.codeIds = object.codeIds.map((e: any) => Long.fromString(e)) }
    array(args: FromJSONMethod, expr: t.Expression) {
        const { messageProp, objProp } = getPropNames(args.field);

        return t.ifStatement(
            t.callExpression(
                    t.memberExpression(
                        t.identifier('Array'),
                        t.identifier('isArray')
                    ),
                    [
                        t.optionalMemberExpression(
                            t.identifier('object'),
                            t.identifier(objProp),
                            false,
                            true
                        )
                    ]
            ),
            t.expressionStatement(
              t.assignmentExpression(
                "=",
                t.memberExpression(t.identifier("obj"), t.identifier(objProp)),
                t.callExpression(
                  t.memberExpression(
                    t.memberExpression(t.identifier("object"), t.identifier(objProp)),
                    t.identifier("map")
                  ),
                  [
                    t.arrowFunctionExpression(
                      [identifier("e", t.tsTypeAnnotation(t.tsAnyKeyword()))],
                      expr,
                      false
                    ),
                  ]
                )
              )
            )
        )
    }
};


