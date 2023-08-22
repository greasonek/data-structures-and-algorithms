'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(top = null){
    this.top = top;
  }
  push(value){
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let current = this.top;
    this.top = current.next;
    current.next = null;
    return current;
  }

  validateBrackets(str) {
    let openBrackets = ['{, [, ('];
    let closeBrackets = ['}, ], )'];
    let pairs = {'{': '}', '[':']','(':')'};
    // if (str.length)
  }
}


module.exports = { Node, Stack };
