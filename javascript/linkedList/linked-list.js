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

  instert(value) {
    if (this.isEmpty()) {
      this.head = new SSLNode(value);
      return this;
    }
    else {
      let newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
  }

  includes(value) {
    if (this.isEmpty()) {
      return false;
    }
    let runner = this.head;
    while (runner !== null) {
      if (runner.value === value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  toString() {
    if (this.isEmpty()) {
      console.log('The list is empty');
      return;
    }
    var runner = this.head;
    var string = '';
    while (runner !== null) {
      string += runner.value + ' -> ';
      runner = runner.next;
    }
    console.log(string);
    return this;
  }

  append(value) {
    if (this.isEmpty()) {
      this.head = new SSLNode(value);
      return this;
    }
    else {
      let runner = this.head;
      while (runner.next !== null) {
        runner = runner.next;
      }
      runner.next = new SSLNode(value);
      return this;
    }
  }

  insertBefore(value, newValue) {
    if (this.isEmpty()) {
      this.head = new SSLNode(value);
      return this;
    }
    else {
      let runner = this.head;
      while (runner) {
        if (runner.next.value !== value) {
          runner = runner.next;
        }
        runner = new SSLNode(newValue);
        return this;
      }
    }
  }

  insertAfter(value, newValue) {
    if (this.isEmpty()) {
      this.head = new SSLNode(value);
      return this;
    }
    else {
      let runner = this.head;
      while (runner.value !== value) {
        runner = runner.next;
      }
      runner = new SSLNode(newValue);
      return this;
    }
  }

  kthFromEnd(k) {
    if (this.isEmpty()) {
      this.head = new SSLNode(k);
      return this;
    }
    else {
      let walker = this.head;
      let runner = walker.next;
      while (runner.next !== null) {
        walker = runner.next - k;
      }
      return walker.value;
    }
  }

}

module.exports = { SSLNode: SSLNode, SLList: SLList };

