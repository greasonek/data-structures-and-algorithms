'use strict';

function insertSort(arr) {
  const k = arr.length;

  for (let i = 1; i < k; i++) {
    let current = arr[i];
    let j = i -1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

module.exports = insertSort;
