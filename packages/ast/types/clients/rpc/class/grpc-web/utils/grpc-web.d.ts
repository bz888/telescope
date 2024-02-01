import * as t from '@babel/types';
import { ProtoService } from '@subql/x-cosmology-types';
export declare const metadata: t.Identifier;
export declare const bindThis: (name: string) => t.ExpressionStatement;
export declare const makeComment: (comment: string) => {
    type: string;
    value: string;
}[];
export declare const getRpcClassName: (service: ProtoService) => string;
