import { expect } from 'chai';
import { set} from './set'

describe('set', () => {
  it('should set a value by keypath', () => {
    const obj = {};
    const keypath = "test";
    const value = "some value";

    set(obj, keypath, value);

    expect(obj).to.haveOwnProperty(keypath, value);
  });
  it('should return origin object if its not an object', () => {
    const obj = 'string';
    const keypath = "test";
    const value = "some value";

    const result = set(obj, keypath, value);

    expect(result).to.eq(obj);
  });
});