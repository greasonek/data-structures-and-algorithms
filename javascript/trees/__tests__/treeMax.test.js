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

describe ('Trees', () => {
  test('Can successfully find the max node value in a tree', () => {
    const testTree = new BinaryTree(fakeTree);
    expect(testTree.findMax().toEqual('15'));
  });
});

module.exports = { BinarySearchTree, BinaryTree, BinaryTreeNode};
