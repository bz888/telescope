import { ProtoAny, ProtoRoot, ProtoType, ProtoRef, TelescopeOptions, IParseContext } from "@subql/x-cosmology-types";
export declare const getTypeUrlWithPkgAndName: (pkg: string, name: string) => string;
export declare const getTypeUrl: (root: ProtoRoot, proto: ProtoAny | ProtoType) => string;
export declare const getAminoTypeName: (context: IParseContext, root: ProtoRoot, proto: ProtoType) => any;
export declare const getAminoTypeNameByRef: (ref: ProtoRef, options: TelescopeOptions, root: ProtoRoot, proto: ProtoType) => any;
