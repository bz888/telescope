import { GenericParseContext } from '../../../../encoding';
import { ProtoService } from '@subql/x-cosmology-types';
import * as t from '@babel/types';
export declare const createGRPCGatewayQueryClass: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const createGRPCGatewayWrapperClass: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
