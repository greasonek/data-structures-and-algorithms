'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(front = null, rear = null) {
    this.front = front;
    this.rear = rear;
  }

  declareRear() {
    if(this.rear) return;
    if(!this.front) return;
    let current = this.front;
    while(current.next) {
      current = current.next;
    }
    this.rear = current;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(!this.rear) this.declareRear();
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.next;
  }

  isEmpty() {
    return this.front = null;
  }
}

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class Tree {
  constructor(root = null) {
    this.root = root;
  }
  breadthFirst(Tree){
    if(this.root === null){
      return null;
    }
    while(Tree.length > 0) {
      this.front = Tree.dequeue();
      return this.front.value;
    } if(this.left !== null) {
      Tree.enqueue(this.left);
    } if(this.right !== null) {
      Tree.enqueue(this.right);
    }
  }
}

module.exports = {Node, Queue, TreeNode, Tree};

