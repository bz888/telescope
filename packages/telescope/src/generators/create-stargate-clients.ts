import { Bundler } from '../bundler';
import { TelescopeBuilder } from '../builder';
import { join, dirname, relative } from 'path';
import {
    importNamespace,
    GenericParseContext,
    createStargateClient,
    createStargateClientOptions,
    createStargateClientProtoRegistry,
    createStargateClientAminoRegistry,
    createGetTxRpc
} from '@subql/x-cosmology-ast';
import { ProtoRef } from '@subql/x-cosmology-types';
import { camel, pascal } from 'case';
import { variableSlug } from '@subql/x-cosmology-utils';
import { buildAllImportsFromGenericContext } from '../imports';

export const plugin = (
    builder: TelescopeBuilder,
    bundler: Bundler
) => {

    if (!bundler.registries || !bundler.registries.length) {
        return;
    }

    const registryImports = [];
    const converterImports = [];

    const clientFile = join(`${bundler.bundle.base}`, 'client.ts');
    bundler.files.push(clientFile);

    const ctxRef: ProtoRef = {
        absolute: '/',
        filename: '/',
        proto: {
            imports: [],
            package: bundler.bundle.base, // for package options
            root: {},
        }
    };
    const ctx = new GenericParseContext(ctxRef, null, builder.options);

    const registryVariables = [];
    const converterVariables = [];

    bundler.registries.forEach(registry => {
        let rel = relative(dirname(clientFile), registry.localname);
        if (!rel.startsWith('.')) rel = `./${rel}`;
        const variable = variableSlug(registry.localname);
        registryVariables.push(variable);
        registryImports.push(importNamespace(variable, rel));
    });

    bundler.converters.forEach(converter => {
        let rel = relative(dirname(clientFile), converter.localname);
        if (!rel.startsWith('.')) rel = `./${rel}`;
        const variable = variableSlug(converter.localname);
        converterVariables.push(variable);
        converterImports.push(importNamespace(variable, rel));
    });

    const name = 'getSigning' + pascal(bundler.bundle.base + 'Client');
    const txRpcName = 'getSigning' + pascal(bundler.bundle.base + 'TxRpc');
    const prefix = camel(bundler.bundle.base);
    const aminos = createStargateClientAminoRegistry({
        context: ctx,
        aminos: converterVariables,
        aminoConverters: prefix + 'AminoConverters'
    });
    const protos = createStargateClientProtoRegistry({
        context: ctx,
        registries: registryVariables,
        protoTypeRegistry: prefix + 'ProtoRegistry'
    });
    const clientOptions = createStargateClientOptions({
        context: ctx,
        name: name + 'Options',
        protoTypeRegistry: prefix + 'ProtoRegistry',
        aminoConverters: prefix + 'AminoConverters'
    });
    const clientBody = createStargateClient({
        context: ctx,
        name,
        options: name + 'Options',
    });

    let getTxRpc;

    if(ctx.pluginValue("stargateClients.addGetTxRpc")){
      getTxRpc = createGetTxRpc(ctx, txRpcName, name);
    }

    const imports = buildAllImportsFromGenericContext(ctx, clientFile);

    let cProg = [...imports, ...registryImports, ...converterImports]
      .concat(aminos)
      .concat(protos)
      .concat(clientOptions)
      .concat(clientBody);

    if (getTxRpc) {
      cProg = cProg.concat(getTxRpc);
    }


    const clientOutFile = join(builder.outPath, clientFile);
    bundler.writeAst(cProg, clientOutFile);

};