'use strict';

const {treeIntersection, TreeNode} = require('./treeIntersection');
console.log(TreeNode);
describe('treeIntersection', () => {
  it('should find common values', () => {
    const nodeOne = new TreeNode(60);
    nodeOne.left = new TreeNode(23);
    nodeOne.right = new TreeNode(100);
    nodeOne.left.left = new TreeNode(18);
    nodeOne.right.right = new TreeNode(30);

    const nodeTwo = new TreeNode(60);
    nodeTwo.left = new TreeNode(23);
    nodeTwo.right = new TreeNode(100);
    nodeTwo.left.left = new TreeNode(15);
    nodeTwo.right.right = new TreeNode(30);

    const commonVals = treeIntersection(nodeOne, nodeTwo);
    expect(commonVals).toEqual([60,23,100,30]);
  });
  it('should return an empty aray if there are no common values', () => {
    const nodeOne = new TreeNode(60);
    nodeOne.left = new TreeNode(23);
    nodeOne.right = new TreeNode(100);
    nodeOne.left.left = new TreeNode(18);
    nodeOne.right.right = new TreeNode(30);

    const nodeTwo = new TreeNode(61);
    nodeTwo.left = new TreeNode(24);
    nodeTwo.right = new TreeNode(101);
    nodeTwo.left.left = new TreeNode(16);
    nodeTwo.right.right = new TreeNode(31);

    const commonVals = treeIntersection(nodeOne, nodeTwo);
    expect(commonVals).toEqual([]);
  });
  it('should return an empty array if one tree is empty', () => {
    const nodeOne = new TreeNode(60);
    nodeOne.left = new TreeNode(23);
    nodeOne.right = new TreeNode(100);
    nodeOne.left.left = new TreeNode(18);
    nodeOne.right.right = new TreeNode(30);

    const nodeTwo = null;

    const commonVals = treeIntersection(nodeOne, nodeTwo);
    expect(commonVals).toEqual([]);
  });
});

module.export = {TreeNode, treeIntersection};
