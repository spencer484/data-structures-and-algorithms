const { BSNode, BSTree } = require('./tree');


describe('Testing for the Binary Search Trees', () => {
  test('Can successfully instantiate an empty tree', () => {
    expect(BSTree).toBeDefined();
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BSTree('cheese');
    expect(tree.root).toBe('cheese');
  });
  test('Can successfully add a left child and right child to a single root node', () => {
    const apple = new BSNode('apple', 'bananas', 'cherries');
    expect(apple.value).toBe('apple');
    expect(apple.left).toBe('bananas');
    expect(apple.right).toBe('cherries');
  });
  test('Can successfully return a collection from a preorder traversal', () => {
    const bananas = new BSNode('bananas');
    const cherries = new BSNode('cherries');
    const apple = new BSNode('apple', bananas, cherries);
    const tree = new BSTree(apple);
    expect(tree.preOrder()).toEqual(['apple', 'bananas', 'cherries']);
  });
  test('Can successfully return a collection from an inorder traversal', () => {
    const bananas = new BSNode('bananas');
    const cherries = new BSNode('cherries');
    const apple = new BSNode('apple', bananas, cherries);
    const tree = new BSTree(apple);
    expect(tree.inOrder()).toEqual(['bananas', 'apple', 'cherries']);
  });
  test('Can successfully return a collection from a postorder traversal', () => {
    const bananas = new BSNode('bananas');
    const cherries = new BSNode('cherries');
    const apple = new BSNode('apple', bananas, cherries);
    const tree = new BSTree(apple);
    expect(tree.postOrder()).toEqual(['bananas', 'cherries', 'apple']);
  });
});

