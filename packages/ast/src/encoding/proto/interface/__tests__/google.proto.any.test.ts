import { getNestedProto } from '@subql/x-cosmology-utils';
import { defaultTelescopeOptions } from '@subql/x-cosmology-types';
import { expectCode, getTestProtoStore, printCode } from '../../../../../test-utils/'
import { ProtoParseContext } from '../../../context';
import { createSDKType, createProtoType } from '..';
import { createAminoType } from '../amino';
import { createObjectWithMethods } from '../../../object';

const store = getTestProtoStore();
store.traverseAll();

describe('Any', () => {
    const ref = store.findProto('google/protobuf/any.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    context.options.aminoEncoding.useLegacyInlineEncoding = true;
    it('interface', () => {
        expectCode(createProtoType(context, 'Any',
            getNestedProto(ref.traversed).Any
        ));
    });
    it('api interface', () => {
        expectCode(createSDKType(context, 'Any',
            getNestedProto(ref.traversed).Any
        ));
    });
    it('amino interface', () => {
        expectCode(createAminoType(context, 'Any',
            getNestedProto(ref.traversed).Any
        ));
    });
    it('interface', () => {
        expectCode(createObjectWithMethods(context, 'Any',
            getNestedProto(ref.traversed).Any
        ));
    });
});
