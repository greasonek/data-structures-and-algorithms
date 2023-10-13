'use strict';

function repeatedWords(str) {
  const newStr = str.replaceAll(',', '').toLowerCase();
  const array = newStr.split(' ');

  const words = {};

  for(let word of array) {
    if(words[word]) return word;
    else words[word] = true;
  }
}

module.exports = repeatedWords;
// for (let i = 0; i < words.length; i++){
//   const word = words[i];

//   if(array[word] === undefined) {
//     array[word] = 1;
//   } else {
//     if(array[word] === 2) {
//       results[word]++;
//     }
//   }
// }
// return results.join('');
