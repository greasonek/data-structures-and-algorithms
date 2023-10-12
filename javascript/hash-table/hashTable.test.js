'use strict';

const HashTable = require('./hashTable');

describe('Hash Table', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const myHashTable = new HashTable();
    myHashTable.set('name', 'Emma');
    myHashTable.set('age', 33);

    expect(myHashTable.get('name')).toBe('Emma');
    expect(myHashTable.get('age')).toBe(33);
  });

  it('Retrieving based on a key returns the value stored', () => {
    const myHashTable = new HashTable();

    myHashTable.set('name', 'Emma');
    myHashTable.set('age', 33);

    expect(myHashTable.get('name')).toBe('Emma');
    expect(myHashTable.get('age')).toBe(33);
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    const myHashTable = new HashTable();

    myHashTable.set('name', 'Emma');
    myHashTable.set('age', 33);

    expect(myHashTable.get('city')).toBeNull();
  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const myHashTable = new HashTable();

    myHashTable.set('name', 'Emma');
    myHashTable.set('age', 33);
    myHashTable.set('dogs', 2);
    myHashTable.set('city', 'Olympia');

    const keys = myHashTable.keys();

    expect(keys).toEqual(expect.arrayContainting(['name', 'age', 'dogs', 'city']));
  });

  it('Successfully handle a collision within the hashtable', () => {
    const myHashTable = new HashTable(3); // Create a small hash table to force collisions

    // Manually set two keys that will collide
    myHashTable.set('key1', 'value1');
    myHashTable.set('key4', 'value4');

    // Retrieve the values for the collided keys
    const value1 = myHashTable.get('key1');
    const value4 = myHashTable.get('key4');

    expect(value1).toBe('value1');
    expect(value4).toBe('value4');
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const myHashTable = new HashTable(3);

    myHashTable.set('key1', 'value1');
    myHashTable.set('key4', 'value4');

    const value1 = myHashTable.get('key1');
    const value4 = myHashTable.get('key4');

    expect(value1).toBe('value1');
    expect(value4).toBe('value4');
  });

  it('Successfully hash a key to an in-range value', () => {
    const myHashTable = new HashTable(8);

    const hashedValue = myHashTable.hash('myKey');

    expect(hashedValue).toBeGreaterThanOrEqual(0);
    expect(hashedValue).toBeLessThan(8);
  });
});

module.exports = HashTable;
