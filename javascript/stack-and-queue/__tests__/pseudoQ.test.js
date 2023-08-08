'use strict';

const { PseudoQ} = require('../index11');

describe('PseudoQ', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

const dummyQ = {
  value: '1',
  next: {
    value: '2',
    next: {
      value: '3',
      next: null,
    },
  },
};

describe('PseudoQ test', () => {
  test('Can my function enqueue', () => {
    const testQ = new PseudoQ(dummyQ);
    testQ.enqueue('1');
    expect(testQ.toString()).toEqual('{ 1 } -> NULL');
  });
});

describe('Dequeue returns node values', () => {
  test('Dequeue returns node values', () => {
    const testQ = new PseudoQ(dummyQ);
    testQ.dequeue('1');
    expect(testQ.toString()).toEqual('NULL');
  });
});

module.exports = { PseudoQ };
