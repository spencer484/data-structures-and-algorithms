const { BSNode, BTree } = require('./maxBinaryTree');


describe('Find the maximum value in Binary Tree', () => {
  test('Just need that maximum value', () => {
    const eight = new BSNode(8);
    const six = new BSNode(6);
    const five = new BSNode(5);
    const tree = new BTree(eight, six, five);
    expect(tree.findMaximumValue()).toEqual(8);
  });
});

