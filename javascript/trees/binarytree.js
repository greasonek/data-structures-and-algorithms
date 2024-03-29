'use strict';

class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder(node, results = []) {
    // could do anything, we're just having it logged
    results.push(node.value);
    // console.log(node.value);
    // go left
    if(node.left) {
      this.preOrder(node.left, results);
    }
    // goright
    if(node.right) {
      this.preOrder(node.right, results);
    }
    return;
  }
  inOrder(node, results = []) {
    if(node.left){
      this.inOrder(node.left, results);
    }
    results.push(node.value);
    // console.log(node.value);
    if(node.right) {
      this.inOrder(node.right, results);
    }
    return;
  }
  postOrder(node, results = []){
    if(node.left) {
      this.postOrder(node.left, results);
    }
    if(node.right){
      this.postOrder(node.right, results);
    }
    results.push(node.value);
    // console.log(node.value);
    return;
  }
  isEmpty() {
    return this.value = null;
  }

  findMax() {
    if (this.root === null) {
      return null;
    }

    let maxVal = this.value;
    this.left = this.findMax(this.left);
    this.right = this.findMax(this.right);
    if(this.left > maxVal) {
      maxVal = this.left;
    }
    if(this.right > maxVal) {
      maxVal = this.right;
    }
    return maxVal;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }
  add(num, node) {
    let newNode = new BinaryTreeNode(num);
    if(!this.root) {
      this.root = newNode;
      return;
    }
    if(num === node.value) return;

    if(num < node.value) {
      if(node.left) {
        this.add(num, node.left);
        return;
      }
      else {
        node.left === newNode;
        return;
      }
    }
    if(num > node.value) {
      if(node.right) {
        this.add(num, node.right);
        return;
      }
      else {
        node.right === newNode;
        return;
      }
    }
    return;
  }

  contains(node, value) {
    if (!node) {
      return false;
    }
    if (value === node.value) {
      return true;
    } else if(value < node.value) {
      return this.contains(node.left, value);
    } else {
      return this.contains(node.right, value);
    }
  }

  // greaterSum(root) {
  //   if(!root){
  //     return null;
  //   }
  //   subtreeSum(node) {
  //     if(node === null){
  //       return 0;
  //     }
  //     const leftSubtree = subtreeSum(node.left);
  //     const rightSubtree = subtreeSum(node.right);
  //   }

  //   if(leftSubtree > rightSubtree) {
  //     return 'left';
  //   } else if (rightSubtree > leftSubtree){
  //     return 'right';
  //   } else {
  //     return 'equal';
  //   }
  // }
}

module.exports = {BinaryTreeNode, BinaryTree, BinarySearchTree};
