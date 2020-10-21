
const obj = require('./linked-list');

describe('Testing for the SSL', () => {
  test('New Node should be the head', () => {
    let cheese = new obj.SLList();
    cheese.insert('a');

    expect(cheese.head.value).toStrictEqual('a');
  });
  test('Test for the value in the Node', () => {
    let cheese = new obj.SLList();
    cheese.insert('a');
    cheese.insert('b');
    cheese.insert('c');

    expect(cheese.includes('b')).toStrictEqual(true);
    expect(cheese.includes('x')).toStrictEqual(false);
  });
  test('Test should print the values in list', () => {
    let cheese = new obj.SLList();
    cheese.insert('a');
    cheese.insert('b');
    cheese.insert('c');

    expect(cheese.toString()).toStrictEqual('{ c } -> { b } -> { a } -> NULL');
  });
  test('Test should add node to end of list', () => {
    let cheese = new obj.SLList();
    cheese.insert('a');
    cheese.insert('b');
    cheese.insert('c');
    cheese.append('x');

    expect(cheese.toString()).toStrictEqual('{ c } -> { b } -> { a } -> { x } -> NULL');
  });
  test('Test should add node before certain value', () => {
    let cheese = new obj.SLList();
    cheese.insert('a');
    cheese.insert('b');
    cheese.insert('c');
    cheese.insertBefore('b', 'x');

    expect(cheese.toString()).toStrictEqual('{ c } -> { x } -> { b } -> { a } -> NULL');
  });
  test('Test should add node after certain value', () => {
    let cheese = new obj.SLList();
    cheese.insert('a');
    cheese.insert('b');
    cheese.insert('c');
    cheese.insertAfter('b', 'x');

    expect(cheese.toString()).toStrictEqual('{ c } -> { b } -> { x } -> { a } -> NULL');
  });
  test('Test get value of node from the end of given list value', () => {
    let cheese = new obj.SLList();
    cheese.insert('a');
    cheese.insert('b');
    cheese.insert('c');
    cheese.insert('d');
    cheese.insert('e');
    cheese.insert('f');
    cheese.insert('g');
    cheese.insert('h');

    expect(cheese.kthFromEnd(0)).toStrictEqual('a');
    expect(cheese.kthFromEnd(3)).toStrictEqual('d');
  });
});
