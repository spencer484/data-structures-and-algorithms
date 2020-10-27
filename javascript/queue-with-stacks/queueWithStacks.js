class SSLNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SLList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }
}

class Stack {
  constructor() {
    this.data = new SLList();
  }
}



class QueueStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (!this.stack1.isEmpty())
      this.stack2.push(this.stack1.pop().value);

    this.stack1.push(value);

    while (!this.stack2.isEmpty())
      this.stack1.push(this.stack2.pop().value);

    return this;
  }

  dequeue() {
    return this.stack1.pop();
  }
}


module.exports = { SSLNode: SSLNode, SLList: SLList, Stack: Stack, QueueStack: QueueStack };

