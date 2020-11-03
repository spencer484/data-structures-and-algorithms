class BSNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor() {
    this.root = null;
  }


  findMaximumValue() {

    let array = [];
    let max = 0;

    function preOrder(root) {

      if (!root) {
        return;
      }
      console.log(root.value);
      if (root.left) {
        preOrder(root.left);
      }
      array.push(root.value);
      console.log(array);
      if (root.right) {
        preOrder(root.right);
      }
    }
    preOrder(this.root);

    for (let i = 0; i < array.length; i++) {
      if (array[i] >= max) {
        max = array[i];
        return max;
      }
    }

  }
  // preOrder() {
  //   let array = [];
  //   function preOrder(root) {
  //     if (!root) {
  //       return;
  //     }
  //     array.push(root.value);
  //     preOrder(root.left);
  //     preOrder(root.right);
  //   }
  //   preOrder(this.root);
  //   return array;
  // }

  // findMax(array) {
  //   let max = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     if (max < array[i]) {
  //       max = array[i];
  //     }
  //   }
  //   return max;
  // }

}

module.exports = { BSNode: BSNode, BTree: BTree };

