'use strict';

class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
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

  includes(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) return true;
      current = current.next;
    }
    return false;
  }

  append(val) {
    const newNode = new Node(val);
    if(!this.head) this.head = newNode;
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(val, newVal) {
    const newNode = new Node(newVal);
    if(!this.head) return this.head = newNode;
    if(this.head.value === val) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current) {
      if(current.next.value === val) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(val, newVal) {
    let insert = new Node(newVal);
    if (!this.head) return this.head = insert;
    let current = this.head;
    while(current) {
      if(current.value === val) {
        let temp = current.next;
        current.next = insert;
        insert.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }
}



module.exports = LinkedList;
