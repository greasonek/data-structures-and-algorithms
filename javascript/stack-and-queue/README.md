# Code Challenge 10

## Author: Emily Greason

- Whiteboard Process:
![code-challenge-10-whiteboard](Screenshot%202023-08-02%20at%208.09.34%20PM.png)

## NOTES

## Data Strucutes: Stacks and Queues

- Like linked lists
- FILO LIFO
- Stack
  - like call stack in programming
- Queue
  - like in line for a movie
- Implement
- Document
- Test

### STACK RULES

- can only add to the top
- can only remove from the top
- LIFO (last in first out)
  - is composed of a series of linked nodes
  - each node has a next
- Top (instead of a head)

- **Push** (add node on top)
  - To add to the top:
    - declare newNode
    - newNode.next = top
    - top = newNode

- **Pop** (remove node from the top)
  - To remove from the top:
    - current = top
    - top = current.next
    - current.next = null
    - return current

    let temp = new Node();
    temp.next = this.top;
    this.top = this.top.next;
    temp.next.next = null;
    return temp.next.value;

- **Peek** ( returns the VALUE from the top node)
  - Is there a top?
  - return top.value

- **isEmpty** (returns a boolean)
  - is there a top?
  - return true or false

### QUEUE

- **Enqueue**
  - rear.next = newNode
  - rear = newNode

- **Dequeue**
  - temp = front
  - front = temp.next
  - temp.next = null
  - return temp

- Front
  - **Peek at the front**
    - is there a front?
    - return front.value

- Rear

- **isEmpty**
  - if front &&/|| rear are null
