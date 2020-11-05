
let oddArray = 0;

class BSNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  inOrder() {
    let array = [];
    function inOrder(root) {
      if (!root) {
        return;
      }
      inOrder(root.left);
      array.push(root.value);
      inOrder(root.right);
    }
    inOrder(this.root);
    return array;
  }


  insert(value, runner = this.root) {
    if (runner === null) {
      this.root = new BSNode(value);
      return this;
    }

    if (value >= runner.value) {
      if (runner.right === null) {
        runner.right = new BSNode(value);
        return this;
      }
      return this.insert(value, runner.right);
    }
    else {
      if (runner.left === null) {
        runner.left = new BSNode(value);
        return this;
      }
      return this.insert(value, runner.left);
    }
  }


  oddNode(runner = this.root) {
    if (runner !== null) {
      this.oddNode(runner.left);

      if (runner.value % !== 0) {
        oddArray += runner.value;
      }

      oddNode(runner.right);
    }
    return oddArray;
  }
}

const tree = new BSTree()

const BSNode1 = new BSNode(1)
const BSNode2 = new BSNode(2)
const BSNode3 = new BSNode(3)
const BSNode4 = new BSNode(4)
const BSNode5 = new BSNode(5)

tree.root = BSNode1;
tree.root.left = BSNode2;
tree.root.right = BSNode3;
tree.root.left.left = BSNode4;
tree.root.left.right = BSNode5;