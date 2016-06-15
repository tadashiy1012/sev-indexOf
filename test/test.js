const assert = require('power-assert');

const sevIndexOf = require('../index.js');

describe('sev-indexOf test', () => {
  const str = 'hoge hoge fuga hoge fuga';
  it('test1', () => {
    const result = sevIndexOf(str, 'hoge', 3);
    assert(result === 15);
  });
  it('test2', () => {
    const result = sevIndexOf(str, 'moge', 1);
    assert(result === -1);
  });
});