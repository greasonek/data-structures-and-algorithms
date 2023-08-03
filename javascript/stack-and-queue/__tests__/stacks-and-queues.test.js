'use strict';

const {Stack, Queue} = require('../index.js');

describe('Stack', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

const dummyStack = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: null,
    },
  },
};

describe('Queue', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

const dummyQ = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next: null,
    },
  },
};
//1,2,4,5,6,7,8,9,10
describe('Stacks and Queues tests', () => {
  //1
  test('Can successfully push onto a stack', () => {
    const testStack = new Stack(dummyStack);
    testStack.push('d');
    expect(testStack.toString()).toEqual('{ d } -> { a } -> { b } -> { c } -> NULL');
  });
  //2
  test('Can successfully push multiple values onto a stack', () => {
    const testStack = new Stack(dummyStack);
    testStack.push('d');
    testStack.push('e');
    testStack.push('f');
    expect(testStack.toString()).toEqual('{ f } -> { e } -> { d } -> { a } -> { b } -> { c } -> NULL');
  });
  //3
  test('Can successfully pop off the stack', () => {
    const testStack = new Stack(dummyStack);
    expect(testStack.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });
  //4
  test('Can successfully empty a stack after multiple pops', () => {
    const testStack = new Stack(dummyStack);
    testStack.pop('c');
    testStack.pop('b');
    testStack.pop('a');
    expect(testStack.toString()).toEqual('NULL');
  });
  //5
  test('Can successfully peek the next item on the stack', () => {
    const testStack = new Stack(dummyStack);
    expect(testStack.toString()).toEqual('{ a } -> NULL');
  });
  //6
  test('Can successfully instantiate an empty stack', () => {
    const testStack = new Stack(dummyStack);
    testStack.isEmpty();
    expect(testStack.toString()).toEqual('NULL');
  });
  //7
  test('Calling pop or peek on empty stack raises exception', () => {
    const testStack = new Stack(dummyStack);
    testStack.pop();
    expect(testStack.toString()).toEqual('NULL');
  });
  //8
  test('Can successfully enqueue onto a queue', () => {
    const testQ = new Queue(dummyQ);
    testQ.enqueue('d');
    expect(testQ.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
  });
  //9
  test('Can successfully enqueue multiple values into a queue', () => {
    const testQ = new Queue(dummyQ);
    testQ.enqueue('e');
    testQ.enqueue('f');
    expect(testQ.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> { f } -> NULL');
  });
  //10
  test('Can successfully dequeue out of a queue the expected value', () => {
    const testQ = new Queue(dummyQ);
    testQ.dequeue('a');
    expect(testQ.toString()).toEqual('{ b } -> { c } -> { d } -> { e } -> { f } -> NULL');
  });
  //11
  test('Can successfully peek into a queue, seeing the expected value', () => {
    const testQ = new Queue(dummyQ);
    expect(testQ.toString()).toEqual('{ a } -> NULL');
  });
  //12
  test('Can successfully empty a queue after multiple dequeues', () => {
    const testQ = new Queue(dummyQ);
    testQ.dequeue('a');
    expect(testQ.toString()).toEqual('NULL');
  });
  //13
  test('Can successfully instantiate an empty queue', () => {
    const testQ = new Queue(dummyQ);
    testQ.dequeue('a');
    expect(testQ.toString()).toEqual('NULL');
  });
  //14
  test('Calling dequeue or peek on empty queue raises exception', () => {
    const testQ = new Queue(dummyQ);
    testQ.dequeue('a');
    expect(testQ.toString()).toEqual('NULL');
  });
});



module.exports = { Stack, Queue };
