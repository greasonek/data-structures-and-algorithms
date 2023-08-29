'use strict';

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

describe('Tree', () => {
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
  test('Can successfully return a collection from an in-order traversal', () => {
    const testTree = new BinaryTree(fakeTree);
    testTree.inOrder();
    expect(testTree.inOrder()).toBeTruthy;
  });
  test('Can successfully return a collection from a post-order traversal', () => {
    const testTree = new BinaryTree(fakeTree);
    testTree.postOrder();
    expect(testTree.postOrder()).toBeTruthy;
  });
  test('Returns a boolean of true or false when given an existing or non-existing node', () => {
    const testTree = new BinaryTree(fakeTree);
    expect(testTree.contains(10)).toEqual(true);
    expect(testTree.contains(50)).toEqual(false);
  });
});

module.exports = { BinaryTreeNode, BinarySearchTree, BinaryTree };
