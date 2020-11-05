

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

  isEmpty() {
    return this.root = null;
  }


  // Pre-order: root >> left >> right
  preOrder() {
    let array = [];
    function preOrder(root) {
      if (!root) {
        return;
      }
      array.push(root.value);
      preOrder(root.left);
      preOrder(root.right);
    }
    preOrder(this.root);
    return array;
  }


  // In-order: left >> root >> right
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


  // Post-order: left >> right >> root
  postOrder() {
    let array = [];
    function postOrder(root) {
      if (!root) {
        return;
      }
      postOrder(root.left);
      postOrder(root.right);
      array.push(root.value);
    }
    postOrder(this.root);
    return array;
  }



  add(value, current = this.root) {
    if (current === null) {
      this.root = new BSNode(value);
      return this;
    }

    if (value >= current.value) {
      if (current.right === null) {
        current.right = new BSNode(value);
        return this;
      }
      return this.add(value, current.right);
    }
    else {
      if (current.left === null) {
        current.left = new BSNode(value);
        return this;
      }
      return this.add(value, current.left);
    }
  }


  // insert(value) {
  //   var newNode = new BSNode(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //     return this;
  //   } else {
  //     var current = this.root;
  //     while (true) {
  //       if (value === current.value) return undefined;
  //       if (value < current.value) {
  //         if (current.left === null) {
  //           current.left = newNode;
  //           return this;
  //         } else {
  //           current = current.left;
  //         }
  //       } else if (value > current.value) {
  //         if (current.right === null) {
  //           current.right = newNode;
  //           return this;
  //         } else {
  //           current = current.right;
  //         }
  //       }
  //     }
  //   }
  // }


  contains(value, current = this.root) {
    while (current !== null) {
      if (current.value === value) return true;
      else if (value > current.value) current = current.right;
      else current = current.left;
    }
    return false;
  }









}


module.exports = { BSNode, BSTree };

