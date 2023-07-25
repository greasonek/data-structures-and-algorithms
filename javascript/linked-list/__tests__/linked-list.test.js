'use strict';

// Require our linked list implementation
const LinkedList = require('../index.js');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

const dummyLL = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: null,
    },
  },
};

const newDummyLL = {
  value: 'a'
};

describe('linked list test suite', () => {
  test('toString method returns the node values in the right format', () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
  test('includes method returns true if a value exists, else false', () => {
    const testLL = new LinkedList(dummyLL);
    expect(testLL.includes('b')).toEqual(true);
    expect(testLL.includes('z')).toEqual(false);
  });
  test('insert should take a new value and add it to the front of the list', () => {
    const testLL = new LinkedList(dummyLL);
    testLL.insert(1);
    expect(testLL.toString()).toEqual(
      '{ 1 } -> { a } -> { b } -> { c } -> NULL'
    );
  });


  //insert at the end
  test('insert should take a new value and add it to the end of the list', () => {
    const testLL = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLL.append(1);
    expect(testLL.toString()).toEqual(
      '{ a } -> { b } -> { c } -> { 1 } -> NULL'
    );
  });
  // insert multiple at the end
  test('insert should take a new value and add it to the end of the list', () => {
    const testLL = new LinkedList(dummyLL);
    testLL.append(3);
    testLL.append(4);
    testLL.append(5);
    expect(testLL.toString()).toEqual(
      '{ a } -> { b } -> { c } -> { 3 } -> { 4 } -> { 5 } -> NULL'
    );
  });

  //insert before node in middle
  test('can successfully insert a node before a node located in the middle of a linked list', () => {
    const testLLBefore = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLLBefore.insertBefore('b', '1');
    expect(testLLBefore.toString()).toEqual('{ a } -> { 1 } -> { b } -> { c } -> NULL');
  });
  //insert before first node
  test('insert should take a new value and add it to the front of the list', () => {
    const testLL = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLL.insert(1);
    expect(testLL.toString()).toEqual(
      '{ 1 } -> { a } -> { b } -> { c } -> NULL'
    );
  });
  //insert after node in middle
  test('can successfully insert a node after a node located in the middle of a linked list', () => {
    const testLLAfter = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLLAfter.insertAfter('c', '2');
    expect(testLLAfter.toString()).toEqual('{ a } -> { b } -> { c } -> { 2 } -> NULL');
  });
  //insert after last node
  test('can successfully insert a node after the last node of the linked list', () => {
    const testLLEnd = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLLEnd.insertAfter('c', '4');
    expect(testLLEnd.toString()).toEqual('{ a } -> { b } -> { c } -> { 4 } -> NULL');
  });

  // k is greater than the length of the list
  test('the value of k is greater than the length of the list', () => {
    const testLLKth = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLLKth.kthFromEnd(9);
    expect(testLLKth.toString()).toEqual('NULL');
  });
  // k and the length of the list are the same
  test('the value of k and the length of the list are the same', () => {
    const testLLKth = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLLKth.kthFromEnd(LinkedList.length);
    expect(testLLKth.toString()).toEqual(LinkedList.length);
  });
  // k is not a positive integer
  test('the value of k is not a positive integer', () => {
    const testLLKth = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLLKth.kthFromEnd(-3);
    expect(testLLKth.toString()).toEqual();
  });

  // linked list is of a size 1
  test('return the value of k if the list is the size of 1', () => {
    const oneNode = new LinkedList(newDummyLL);
    oneNode.instert('a');
    oneNode.kthFromEnd(0);
    expect(oneNode.toString()).toEqual('a');
    oneNode.kthFromEnd(1);
    expect(oneNode.toString()).toString('null');
  });

  // 'happy path' where k is somewhere in the middle
  test('the value of k is in the middle of the list', () => {
    const testLLKth = new LinkedList({
      value: 'a',
      next: {
        value: 'b',
        next: {
          value: 'c',
          next: null,
        },
      },
    });
    testLLKth.kthFromEnd();
  });
});

module.exports = LinkedList;

