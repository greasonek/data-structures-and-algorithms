'use strict';

const leftJoin = require('./left-join');

describe('leftJoin', () => {
  it('should combine two hashmaps with matching keys', () => {
    const hashmapOne = {
      'diligent': 'employed',
      'fond':'enamored',
      'guide':'usher'
    };
    const hashmapTwo = {
      'diligent': 'idle',
      'fond':'averse',
      'guide': 'follow'
    };

    const results = leftJoin(hashmapOne, hashmapTwo);
    expect(results).toEqual({
      'diligent': ['employed', 'idle'],
      'fond': ['enamored', 'averse'],
      'guide': ['usher', 'follow'],
    });
  });
  it('should handle a case where hashmapTwo is empty', () => {
    const hashmapOne = {
      'diligent': 'employed',
      'fond':'enamored',
      'guide':'usher'
    };
    const hashmapTwo = {};

    const results = leftJoin(hashmapOne, hashmapTwo);
    expect(results).toEqual({
      'diligent': ['employed', 'NULL'],
      'fond': ['enamored', 'NULL'],
      'guide': ['usher', 'NULL'],
    });
  });
  it('should handle a case where hashmapOne is empty', () => {
    const hashmapOne = {};
    const hashmapTwo = {
      'diligent': 'idle',
      'fond':'averse',
      'guide': 'follow'
    };

    const results = leftJoin(hashmapOne, hashmapTwo);
    expect(results).toEqual({});
  });
});

module.exports = leftJoin;
