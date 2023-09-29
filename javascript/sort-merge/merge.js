'use strict';

function mergeSort(arr) {
  const n = arr.length;

  if(n <= 1){
    return n;
  }
  const mid = Math.floor(n/2);
  console.log(mid);
  console.log(arr);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // mergeSort(left);
  // mergeSort(right);
  // merge(left, right, arr);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let finalArr = [];
  let i = 0;
  let j = 0;
  // let k = 0;

  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]){
      // arr[k] = left[i];
      finalArr.push(left[i]);
      i++;
    } else {
      finalArr.push(right[j]);
      // arr[k] = right[j];
      j++;
    }
    // k++;
  }
  return [...finalArr, ...left.slice(i), ...right.slice(j)];

  // while(i < left.length){
  //   arr.length = right.length;
  //   j++;
  //   k++;
  // }
  // while(i < right.length){
  //   arr.length = left.length;
  //   j++;
  //   k++;
  // }
}

module.exports = { mergeSort, merge };



// 'use strict';
// function mergeSort (array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   const middle = Math.floor(array.length / 2);
//   const left = array.slice(0, middle);
//   const right = array.slice(middle);
//   return merge(
//     mergeSort(left), mergeSort(right)
//   );
// }
// function merge (left, right) {
//   let resultArray = [];
//   let i = 0;
//   let j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       resultArray.push(left[i]);
//       i++;
//     } else {
//       resultArray.push(right[j]);
//       j++;
//     }
//   }
//   return resultArray
//     .concat(left.slice(i))
//     .concat(right.slice(j));
// }
// module.exports = mergeSort;

