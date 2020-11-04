

const fizzBuzzTree = require('./fizz-buzz-tree');
const { BSNode } = require('../tree/trees');
const { BSTree } = require('../tree/trees');

describe('FizzBuzz Tree tests', () => {
  it('can change a tree of one', () => {
    const tree = new BSTree(new BSNode(5));
    fizzBuzzTree(tree);
    expect(tree.root.value).toBe('Buzz');
  });
  it('can change a full tree', () => {
    const tree = makeTree();
    fizzBuzzTree(tree);
    expect(tree.inOrder()).toEqual(['FizzBuzz', '1', 'Fizz']);
  });
  it('will throw a proper error', () => {
    const tree = new BSTree();
    expect(() => fizzBuzzTree(tree)).toThrowError();
  });
});


const makeTree = () => {
  const one = new BSNode(1);
  const fifteen = new BSNode(15);
  const six = new BSNode(6);
  one.left = fifteen;
  one.right = six;
  const tree = new BSTree(one);
  return tree;
};

