'use strict';

class HashTable {
  constructor(size = 99) {
    this.size = size;
    this.keys = {};
    this.buckets = new Array(size);
  }

  hash(str) {
    let hash = 0;
    // let hashMultiplier = 5;
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i].charCodeAt();
      // hash = (hash + currentLetter) * hashMultiplier;
      hash = (hash + currentLetter) % this.size;
    }
    return hash;
  }

  update(index, key, val) {
    // look through the array and find a value where key === key, update the value
    const array = this.buckets[index];
    for(let i = 0; i < array.length; i++){
      if(array[i].key === key){
        array[i].val = val;
      }
    }
  }

  set(key, val) {
    let index = this.hash(key) % this.size;
    if (this.buckets[index]) {
      //go to the index in the bucket and find the entry where key === key, and replace the value
      if (this.keys[key]) {
        this.update(index, key, val);
      } else this.buckets[index].push({ key, val });
    } else this.buckets[index] = [{key, val}];
    this.keys[key] = true;
  }

  get(key){
    let val = this.hash(key) % this.size;
    let bucket = this.buckets[val];
    if (!bucket) {
      return null;
    }

    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i].key === key) {
        return bucket[i].val;
      }
    }
    return null;
  }

  has(key){
    return this.keys[key] !== undefined;
  }

  key(){
    return Object.keys(this.keys);
  }
}

module.exports = HashTable;
