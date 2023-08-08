// const Stack = require('../stack-and-queue/index10');
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
}

class PseudoQ {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value){
    this.stack1.push(value);
    //O(1)
  }
  transfer() {
    while(this.stack1.top){
      const temp = this.stack1.pop();
      this.stack2.push(temp.value);
    }
  }
  dequeue() {
    if(this.stack2.top){
      return this.stack2.pop();
      //O(1)
    }
    if(this.stack1.top){
      this.transfer();
      return this.stack2.pop();
    }
    //O(n)
    return null;

  }
  toString(){
    let current = this.stack1.top;
    let returnStr = '';
    while(current) {
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    returnStr += 'NULL';
    return returnStr;
  }
}


module.exports = {Stack, PseudoQ};
