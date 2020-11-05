


const obj = require('./stacks-and-queues');

let testStack = new obj.Stack;
let queStack = new obj.Queue;

describe('Testing for the Stacks and Queues', () => {
  test('Can successfully push onto a stack', () => {
    testStack.push(5);
    expect(testStack.top.value).toEqual(5);
  });
  test('Can successfully push multiple values onto a stack', () => {
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack).toEqual([1, 2, 3]);
  });
  test('Can successfully pop off the stack', () => {
    testStack.pop(5);
    expect(testStack.peek()).toEqual(5);
  });
  test('Can successfully empty a stack after multiple pops', () => {
    testStack.pop();
    testStack.pop();
    testStack.pop();
    expect(testStack.isEmpty()).toEqual(true);
  });
  test('Can successfully peek the next item on the stack', () => {
    testStack.push('next');
    testStack.push('top');
    expect(testStack.top.next).toEqual();
  });
  test('Can successfully instantiate an empty stack', () => {
    let stackToTest = new obj.Stack;
    expect(stackToTest.isEmpty()).toEqual(true);
  });
  test('Calling pop or peek on empty stack raises exception', () => {
    let stackToTest = new obj.Stack;
    expect(stackToTest.peek()).toEqual();
  });
  test('Can successfully enqueue into a queue', () => {
    let queToTest = new obj.Queue;
    queToTest.enqueue(5);
    expect(queStack.front.value).toEqual(5);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    queStack.enqueue(1);
    queStack.enqueue(2);
    queStack.enqueue(3);
    expect(queStack).toEqual(1, 2, 3);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    queStack.dequeue();
    queStack.dequeue();
    queStack.dequeue();
    expect(queStack.isEmpty()).toEqual(true);
  });
  test('Can successfully peek into a queue, seeing the expected value', () => {
    queStack.push('next');
    queStack.push('top');
    expect(queStack.front.next).toEqual();
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    let queToTest = new obj.Queue;
    expect(queToTest.isEmpty()).toEqual(true);
  });
  test('Can successfully instantiate an empty queue', () => {
    let queToTest = new obj.Queue;
    expect(queToTest.isEmpty()).toEqual(true);
  });
  test('Calling dequeue or peek on empty queue raises exception', () => {
    let queToTest = new obj.Queue;
    expect(queToTest.peek()).toEqual();
  });
});

