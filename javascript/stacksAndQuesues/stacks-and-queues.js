

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const item = new Node(value);
    item.next = this.top;
    this.top = item;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.top.value;
    }
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      false;
    }
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.rear) {
      this.rear.next = newNode;
    }
    this.rear = newNode;

    if (!this.front) {
      this.front = this.rear;
    }
  }

  dequeue() {
    const temp = this.front;

    this.front = this.front.next;
    temp.next = null;

    if (this.isEmpty()) {
      this.rear = null;
    }
    return temp.value;
  }

  peek() {
    if (!isEmpty()) {
      return this.front.value
    }
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      false;
    }
  }

}

module.exports = { Node: Node, Stack: Stack, Queue: Queue };