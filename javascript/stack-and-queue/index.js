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
  toString(){
    let current = this.top;
    let returnStr = '';
    while(current) {
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    returnStr += 'NULL';
    return returnStr;
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

  peek() {
    return this.top.value;
  }

  isEmpty() {
    return this.top = null;
  }
}

class Queue {
  constructor(front = null, rear = null){
    this.front = front;
    this.rear = rear;
  }

  toString(){
    let current = this.front;
    let returnStr = '';
    while(current) {
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    returnStr += 'NULL';
    return returnStr;
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

  enqueue(value){
    const newNode = new Node(value);
    if(!this.rear) this.declareRear();
    // is there a rear value?

    // is there a front?
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.next;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front = null;
  }
}

module.exports = {Stack, Queue};
