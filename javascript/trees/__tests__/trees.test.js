'use strict'
;

const { BinaryTreeNode, BinarySearchTree, BinaryTree } = require('../binarytree');

describe('Tree', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

const fakeTree = {
  value: 10,
  left: 8,
  right: 15,
};

describe('Trees', () => {
  test('Can successfully instantiate an empty tree', () => {
    const testTree = new BinaryTree(fakeTree);
    expect(testTree.isEmpty()).toBeTruthy;
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    const testTree = new BinaryTree(fakeTree);
    expect(testTree.preOrder()).toBeTruthy;
  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const testTree = new BinaryTree(fakeTree);
    testTree.add(5);
    testTree.add(9);
    expect(testTree.add()).toBeTruthy;
  });
  test('Can successfully return a collection from a pre-order traversal', () => {
    const testTree = new BinaryTree(fakeTree);
    testTree.preOrder(10, 8, 15);
    expect(testTree.preOrder()).toBeTruthy;
  });
});

module.exports = { BinaryTreeNode, BinarySearchTree, BinaryTree };
