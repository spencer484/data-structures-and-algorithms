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
    return this.head == null;
  }

  instert(value) {
    if (this.isEmpty()) {
      this.head = new SLNode(value)
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
    while (runner != null) {
      if (runner.value == value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  toString() {
    if (this.isEmpty()) {
      console.log("The list is empty")
      return;
    }
    var runner = this.head;
    var string = "";
    while (runner != null) {
      string += runner.value + " -> ";
      runner = runner.next;
    }
    console.log(string);
    return this;
  }

  append(value) {
    if (this.isEmpty()) {
      this.head = new SLNode(value);
      return this;
    }
    else {
      let runner = this.head;
      while (runner.next != null) {
        runner = runner.next;
      }
      runner.next = new SLNode(value);
      return this;
    }
  }

  insertBefore(value, newValue) {
    if (this.isEmpty()) {
      this.head = new SLNode(value);
      return this;
    }
    else {
      let runner = this.head
      while (runner) {
        if (runner.next.value != value) {
          runner = runner.next;
        }
        runner = newNode(newValue);
        return this;
      }
    }
  }

  insertAfter(value, newValue) {
    if (this.isEmpty()) {
      this.head = new SLNode(value);
      return this;
    }
    else {
      let runner = this.head;
      while (runner.value != value) {
        runner = runner.next;
      }
      runner = newNode(newValue);
      return this;
    }
  }

}

module.exports = { SLNode: SLNode, SLList: SLList };



















// var myList = new SLList();

// myList.head = new SLNode(5);
// myList.head.next = new SLNode(6);
// myList.head.next.next = new SLNode(7);

// myList.printList();



describe("Testing Singley Linked List", () => {
  test("Test insert, insert value into head of list", () => {
    let cheese = new SLList();
    cheese.insert('a');

    expect(cheese.head.value).toEqual('a');
  });
  test('includes a value for within the nodes'() => {
    let cheese = new SLList();
    cheese.insert('a');
    cheese.insert('b');
    cheese.insert('c');

    expect(cheese.includes)
})
})
