'use strict';

class Node {
  constructor (animal, next = null) {
    this.animal = animal;
    this.next = next;
  }
}

class AnimalShelter {
  constructor(front = null, rear = null) {
    this.front = front;
    this.rear = rear;
  }

  toString() {
    let current = this.front;
    let returnStr = '';
    while(current){
      returnStr += `{ ${current.animal} } -> `;
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

  enqueue(animal){
    const newNode = new Node(animal);
    if(!this.rear) this.declareRear();
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue(pref) {
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    if(pref === this.animal.species){
      return temp.next;
    } else {
      return null;
    }
  }
  isEmpty() {
    return this.front = null;
  }
}

module.exports = { AnimalShelter };
