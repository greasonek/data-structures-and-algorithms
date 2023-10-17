'use strict';

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function treeIntersection(treeOne, treeTwo) {
  const commonVals = [];

  function compare(nodeOne, nodeTwo) {
    if(nodeOne && nodeTwo) {
      if(nodeOne.val === nodeTwo.val) {
        commonVals.push(nodeOne.val);
      }
      compare(nodeOne.left, nodeTwo.left);
      compare(nodeOne.right, nodeTwo.right);
    }
  }
  compare(treeOne, treeTwo);
  return commonVals;
}

module.exports = {TreeNode, treeIntersection };
