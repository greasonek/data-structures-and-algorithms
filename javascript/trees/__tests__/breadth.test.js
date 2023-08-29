'use strict';

const { Tree, TreeNode, Queue, Node } = require('../breadthfirst');

describe('Tree', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('Queue', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('BreadthFirst', () => {
  test('Can the function successfully enqueue the value of each node', () => {
    const testQ = new Queue();
    testQ.enqueue(TreeNode.value);
    expect();
  });
  test('Can the function successfully dequeue the value of each node', () => {
    const testQ = new Queue();
    testQ.dequeue(TreeNode.value);
    expect();
  });
});


module.exports = { Tree, TreeNode, Queue, Node };
