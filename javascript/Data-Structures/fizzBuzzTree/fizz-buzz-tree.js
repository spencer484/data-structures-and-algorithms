
function fizzBuzzTree(tree) {
  if (!tree.root) { throw Error('Can\'t FizzBuzz an empty tree'); }
  function preOrderFizz(root) {
    if (!root) { return; }
    let num = root.value;
    root.value = '';
    if (!(num % 3)) { root.value += 'Fizz'; }
    if (!(num % 5)) { root.value += 'Buzz'; }
    if (!root.value) { root.value += num.toString(); }
    preOrderFizz(root.left);
    preOrderFizz(root.right);
  }
  preOrderFizz(tree.root);
}

module.exports = fizzBuzzTree;








// const fizzBuzzArray = [];

// function preOrder() {
//   var data = [];
//   var current = this.root;
//   function traverse(node) {
//     data.push(node.value);
//     if (node.left) traverse(node.left);
//     if (node.right) traverse(node.right);
//   }
//   traverse(current);
//   return data;


//   function fizzBuzzTree(data) {
//     this.preOrder(this.root)
//     for (let i = 1; i <= data; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         fizzBuzzArray.push('fizzbuzz');
//       } else if (i % 3 === 0) {
//         fizzBuzzArray('fizz');
//       } else if (i % 5 === 0) {
//         fizzBuzzArray('buzz');
//       } else {
//         console.log(i);
//       }
//     } return fizzBuzzArray;
//   }

// }

// module.exports = fizzBuzzTree;
