// Copyright 2017-2019 @polkadot/api-contract authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MtType } from '@polkadot/types/interfaces';

import { TypeRegistry, createType } from '@polkadot/types';

import erc20 from '../test/abi/v3-erc20.json';
import { getInkType, getInkTypes } from './inkRegistry';

const registry = new TypeRegistry();

describe('inkRegistry', (): void => {
  const project = createType(registry, 'InkProject', erc20);

  describe('getInkTypes', (): void => {
    it('fails with invalid indexes', (): void => {
      expect(
        // this is a 0, indexes start at 1, so should fail
        (): MtType => getInkType(project, createType(registry, 'MtLookupTypeId'))
      ).toThrow();
    });

    it('does single lookups via getInkType', (): void => {
      expect(
        JSON.stringify(getInkType(project, project.spec.constructors[0].args[0].type.id))
      ).toEqual('{"path":[],"params":[],"def":{"Primitive":"U128"}}');
    });

    it('does multiple lookups via getInkTypes', (): void => {
      expect(
        JSON.stringify(getInkTypes(project, [project.spec.messages[1].returnType.unwrap().id]))
      ).toEqual('[{"path":[],"params":[],"def":{"Primitive":"U128"}}]');
    });
  });
});
