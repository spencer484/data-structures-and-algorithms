

const testObject = require('./queueWithStacks');

describe('Testing for the Queue with Stacks', () => {
  test('Adds a new node to the queue with the passed in value', () => {
    let testQue = new testObject.QueueStack();
    testQue = enqueue(5);
    testQue = enqueue(4);
    testQue = enqueue(3);
    testQue = enqueue(2);
    testQue = enqueue(1);
    expect(testQue.front.peek().toEqual(5));
  });
  test('Removed a node from the queue', () => {
    let testQue = new testObject.QueueStack();
    testQue = dequeue(5);
    testQue = dequeue(4);
    testQue = dequeue(3);
    testQue = dequeue(2);
    testQue = dequeue(1);
    expect(testQue.back.peek().toEqual(1));
  });
});

