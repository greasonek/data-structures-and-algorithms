'use strict';

const insertSort = require('./insert.js');

describe('insertSort', () => {
  it('should sort an array with multiple elements', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    const sortedArr = insertSort(arr);
    expect(sortedArr).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('should sort a reversed array', () => {
    const arr = [20, 18, 12, 8, 5, -2];
    const sortedArr = insertSort(arr);
    expect(sortedArr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('should sort an array with few unique values', () => {
    const arr = [5, 12, 7, 5, 5, 7];
    const sortedArr = insertSort(arr);
    expect(sortedArr).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('should sort a nearly sorted array', () => {
    const arr = [2, 3, 5, 7, 13, 11];
    const sortedArr = insertSort(arr);
    expect(sortedArr).toEqual([2, 3, 5, 7, 11, 13]);
  });
  it('should sort an empty array', () => {
    const arr = [];
    const sortedArr = insertSort(arr);
    expect(sortedArr).toEqual([]);
  });
  it('should sort an array of one value', () => {
    const arr = [7];
    const sortedArr = insertSort(arr);
    expect(sortedArr).toEqual([7]);
  });
});
