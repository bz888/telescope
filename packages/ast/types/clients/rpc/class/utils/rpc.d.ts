import { ProtoServiceMethod } from '@subql/x-cosmology-types';
import * as t from '@babel/types';
export declare const processRpcComment: (e: ProtoServiceMethod) => string;
export declare const cleanType: (ResponseType: string) => string;
export declare const returnReponseType: (ResponseType: string | t.TSTypeReference) => t.TSTypeAnnotation;
export declare const optionalBool: (hasParams: boolean, fieldNames: string[]) => boolean;
