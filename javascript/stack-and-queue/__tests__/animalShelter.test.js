'use strict';


const { AnimalShelter } = require('../index12');

describe('AnimalShelter', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

const dummyQ = {
  animal: 'cat',
  next: {
    animal: 'dog',
    next: {
      animal: 'cat',
      next: null,
    },
  },
};

describe('Animal Shelter enqueue and dequeue', () => {
  test('Enqueue takes in a species property \'cat\' or \'dog\'', () => {
    const testQ = new AnimalShelter(dummyQ);
    testQ.enqueue('cat');
    testQ.enqueue('dog');
    expect(testQ.toString()).toEqual('{ cat } -> { dog } -> { cat } -> { cat } -> { dog } -> NULL');
  });
  test('Dequeue takes in a pref of cat or dog and returns one based on the user preference', () => {
    const testQ = new AnimalShelter(dummyQ);
    testQ.dequeue('dog');
    expect(testQ.toString()).toEqual('{ cat } -> { dog } -> { cat } -> { cat } -> NULL');
  });
  test('If the Animal Shelter is empty, return null', () => {
    const testQ = new AnimalShelter(dummyQ);
    test.dequeue('cat');
    test.dequeue('cat');
    test.dequeue('dog');
    test.dequeue('cat');
    expect(testQ.toString()).toEqual('NULL');
  });
});





module.exports = { AnimalShelter };
