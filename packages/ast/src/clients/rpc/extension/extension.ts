import * as t from "@babel/types";
import { identifier, objectMethod, objectPattern } from "../../../utils";
import { ProtoService, ProtoServiceMethod } from "@subql/x-cosmology-types";
import { GenericParseContext } from "../../../encoding";
import { camel } from "@subql/x-cosmology-utils";
import { getRpcClassName } from "../class/tendermint";
import { rpcFuncArguments } from "../scoped";

const rpcExtensionMethod = (
  context: GenericParseContext,
  name: string,
  svc: ProtoServiceMethod
) => {
  const requestType = svc.requestType;
  const responseType = svc.responseType;
  const fieldNames = Object.keys(svc.fields ?? {});
  const hasParams = fieldNames.length > 0;

  let optional = false;
  // // if no params, then let's default to empty object for cleaner API
  if (!hasParams) {
    optional = true;
  } else if (
    hasParams &&
    fieldNames.length === 1 &&
    fieldNames.includes("pagination")
  ) {
    // if only argument "required" is pagination
    // also default to empty
    optional = true;
  }

  const methodArgs: t.Identifier = identifier(
    "request",
    t.tsTypeAnnotation(t.tsTypeReference(t.identifier(requestType))),
    optional
  );

  return objectMethod(
    "method",
    t.identifier(name),
    [
      methodArgs,
      ...(context.options.interfaces.enabled &&
      context.options.interfaces.useUseInterfacesParams
        ? [
            t.assignmentPattern(
              identifier(
                "useInterfaces",
                t.tsTypeAnnotation(t.tsBooleanKeyword())
              ),
              t.identifier(
                (
                  context.pluginValue("interfaces.useByDefaultRpc") ?? true
                ).toString()
              )
            ),
          ]
        : []),
    ],
    t.blockStatement([
      t.returnStatement(
        t.callExpression(
          t.memberExpression(t.identifier("queryService"), t.identifier(name)),
          [
            t.identifier("request"),
            ...(context.options.interfaces.enabled &&
            context.options.interfaces.useUseInterfacesParams
              ? [t.identifier("useInterfaces")]
              : []),
          ]
        )
      ),
    ]),
    false,
    false,
    false,
    t.tsTypeAnnotation(
      t.tsTypeReference(
        t.identifier("Promise"),
        t.tsTypeParameterInstantiation([
          t.tsTypeReference(
            // t.identifier(responseType + 'SDKType')
            t.identifier(responseType)
          ),
        ])
      )
    )
  );
};

export const createRpcQueryExtension = (
  context: GenericParseContext,
  service: ProtoService
) => {
  context.addUtil("QueryClient");
  context.addUtil("createProtobufRpcClient");

  const camelRpcMethods = context.pluginValue("rpcClients.camelCase");
  // const name = service.name + 'ClientImpl';
  // const implementsName = service.name;
  // const methodNames = Object.keys(service.methods ?? {})
  //     .map(key => {
  //         return camelRpcMethods ? camel(key) : key
  //     });
  const methods = Object.keys(service.methods ?? {}).map((key) => {
    const method = service.methods[key];
    const name = camelRpcMethods ? camel(key) : key;
    return rpcExtensionMethod(context, name, method);
  });

  return t.exportNamedDeclaration(
    t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier("createRpcQueryExtension"),
        t.arrowFunctionExpression(
          [
            identifier(
              "base",
              t.tsTypeAnnotation(t.tsTypeReference(t.identifier("QueryClient")))
            ),
          ],
          t.blockStatement([
            t.variableDeclaration("const", [
              t.variableDeclarator(
                t.identifier("rpc"),
                t.callExpression(t.identifier("createProtobufRpcClient"), [
                  t.identifier("base"),
                ])
              ),
            ]),
            //////
            t.variableDeclaration("const", [
              t.variableDeclarator(
                t.identifier("queryService"),
                t.newExpression(t.identifier(getRpcClassName(service)), [
                  t.identifier("rpc"),
                ])
              ),
            ]),

            t.returnStatement(t.objectExpression([...methods])),
          ])
        )
      ),
    ])
  );
};

export const createRpcClientImpl = (
  context: GenericParseContext,
  service: ProtoService,
  functionName = "createClientImpl"
) => {
  const useTelescopeGeneratedType = context.pluginValue(
    "prototypes.typingsFormat.useTelescopeGeneratedType"
  );

  if (useTelescopeGeneratedType) {
    context.addUtil("TxRpc");
  } else {
    context.addUtil("Rpc");
  }

  const className = getRpcClassName(service);

  return t.exportNamedDeclaration(
    t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier(functionName),
        t.arrowFunctionExpression(
          [
            identifier(
              "rpc",
              t.tsTypeAnnotation(
                t.tsTypeReference(
                  t.identifier(useTelescopeGeneratedType ? "TxRpc" : "Rpc")
                )
              )
            ),
          ],
          t.blockStatement([
            t.returnStatement(
              t.newExpression(t.identifier(className), [t.identifier("rpc")])
            ),
          ])
        )
      ),
    ])
  );
};

export const createRpcMsgExtension = (
  context: GenericParseContext,
  txRpcName: string
) => {
  context.addUtil("HttpEndpoint");
  context.addUtil("OfflineSigner");

  let functionParams;
  let functionStatements;
  let awaitClientCreation;

  functionParams = [
    objectPattern(
      [
        t.objectProperty(
          t.identifier("rpcEndpoint"),
          t.identifier("rpcEndpoint"),
          false,
          true
        ),
        t.objectProperty(
          t.identifier("signer"),
          t.identifier("signer"),
          false,
          true
        ),
      ],
      t.tsTypeAnnotation(
        t.tsTypeLiteral([
          t.tsPropertySignature(
            t.identifier("rpcEndpoint"),
            t.tsTypeAnnotation(
              t.tsUnionType([
                t.tsStringKeyword(),
                t.tsTypeReference(t.identifier("HttpEndpoint")),
              ])
            )
          ),
          t.tsPropertySignature(
            t.identifier("signer"),
            t.tsTypeAnnotation(t.tsTypeReference(t.identifier("OfflineSigner")))
          ),
        ])
      )
    ),
  ];

  awaitClientCreation = t.callExpression(t.identifier(txRpcName), [
    t.objectExpression([
      t.objectProperty(
        t.identifier("rpcEndpoint"),
        t.identifier("rpcEndpoint"),
        false,
        true
      ),
      t.objectProperty(
        t.identifier("signer"),
        t.identifier("signer"),
        false,
        true
      ),
    ]),
  ]);

  functionStatements = [
    t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier("rpc"),
        t.awaitExpression(awaitClientCreation)
      ),
    ]),

    t.returnStatement(
      t.awaitExpression(
        t.callExpression(t.identifier("createRPCMsgClient"), [
          t.objectExpression([
            t.objectProperty(
              t.identifier("rpc"),
              t.identifier("rpc"),
              false,
              true
            ),
          ]),
        ])
      )
    ),
  ];

  return t.exportNamedDeclaration(
    t.variableDeclaration("const", [
      t.variableDeclarator(
        t.identifier("createRPCMsgExtensions"),
        t.arrowFunctionExpression(
          functionParams,
          t.blockStatement(functionStatements),
          true
        )
      ),
    ])
  );
};
