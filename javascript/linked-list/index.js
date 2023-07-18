'use strict';

class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  traversal() {
    let current = this.head;
    while(current) {
      current = current.next;
    }
  }

  toString() {
    if (!this.head) return 'NULL';
    let current = this.head;
    let returnStr = '';
    while (current) {
      // look at the node.value "{ a } -> "
      returnStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    // once we exit the loop we need to tack NULL on to the end
    returnStr += 'NULL';
    return returnStr;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  incudes(val) {
    let current = this.head;
    while(current) {
      if(current.value === val) return true;
      current = current.next;
    }
    return false;
  }
}

module.exports = { LinkedList, Node };
