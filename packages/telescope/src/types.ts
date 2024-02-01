import { ProtoServiceMethod, TelescopeOptions } from '@subql/x-cosmology-types';
export interface Bundle {
    bundleVariables: {};
    bundleFile: string;
    importPaths: any[];
    base: string;
}
export interface BundlerFile {
    proto?: string;
    package?: string;
    localname: string;
    filename: string;
    isMsg?: boolean;
    instantExportedMethods?: ProtoServiceMethod[]
}

export interface ImportObj {
    type: 'import' | 'default' | 'namespace' | string;
    name: string;
    path: string;
    importAs?: string;
}

export interface DerivedImportObj extends ImportObj {
    orig: string;
}
export interface ImportHash {
    [key: string]: string[];
}

export interface TelescopeInput {
    protoDirs: string[];
    outPath: string;
    options: TelescopeOptions;
}
