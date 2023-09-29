'use strict';

const {mergeSort} = require('./merge.js');

describe('mergeSort', () => {
  it('should merge and sort a divided array with multiple elements', () => {
    const arr = [8, 4, 23, 15, 16, 42];
    const mergedArr = mergeSort(arr);
    expect(mergedArr).toEqual([4, 8, 15, 16, 23, 42]);

  });
});
