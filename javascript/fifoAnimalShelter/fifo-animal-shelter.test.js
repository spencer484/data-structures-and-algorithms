

const AnimalShelter = require('./fifo-animal-shelter');

describe('Animal shelter tests', () => {
  test('throws a error if it is not a cat or dog', () => {
    const badShelter = new AnimalShelter();
    expect(() => bad.enqueue({ type: 'bird' })).toThrowError();
  });
  test('Enqueue a dog', () => {
    const dogShelter = new AnimalShelter();
    dogShelter.enqueue({ type: 'dog' });
    expect(dogShelter.stackOne.peek().type).toEqual('dog');
  });
  test('can dequeue the first animal', () => {
    const shelter = fillTheShelter();
    let dog = shelter.dequeue('dog');
    expect(dog.type).toEqual('dog');
    expect(dog.name).toEqual('wrigley');
  });
  test('can dequeue the entire list', () => {
    const shelter = fillTheShelter();
    expect(shelter.dequeue('cat').type).toEqual('cat');
    expect(shelter.dequeue('cat').type).toEqual('cat');
    expect(shelter.dequeue('dog').type).toEqual('dog');
    expect(shelter.dequeue('dog').type).toEqual('dog');
  });

  const fillTheShelter = () => {
    const bigShelter = new AnimalShelter();
    bigShelter.enqueue({ type: 'dog', name: 'wrigley' });
    bigShelter.enqueue({ type: 'dog', name: 'kona' });
    bigShelter.enqueue({ type: 'cat', name: 'garfield' });
    bigShelter.enqueue({ type: 'cat', name: 'fluffy' });
  };
});
