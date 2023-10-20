'use strict';

function leftJoin(hashmapOne, hashmapTwo) {
  const results = {};

  const keyOne = Object.keys(hashmapOne);
  let i = 0;
  while(i < keyOne.length){
    const keys = keyOne[i];
    if(hashmapTwo[keys] !== undefined){
      results[keys] = [hashmapOne[keys], hashmapTwo[keys]];
    } else {
      results[keys] = [hashmapOne[keys], 'NULL'];
    }
    i++;
  }
  return results;
}

module.exports = leftJoin;
