import camelCase from 'lodash.camelcase';
import mapKeysDeep from 'map-keys-deep-lodash';
import { schema } from 'normalizr';

export const key = 'damages';
export const idAttribute = 'id';

const processStrategy = (obj) => mapKeysDeep(obj, (v, k) => camelCase(k));

export default new schema.Entity(key, {

}, { idAttribute, processStrategy });
