class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.head === null;
  }
}

class AnimalShelter {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  enqueue(animal) {
    if (!'cat' || !'dog'.type(animal.type)) {
      throw Error('animal must be cat or dog');
    }
    while (this.stackOne.top) {
      this.stackTwo.push(this.stackOne.pop());
    }
    this.stackOne.push(animal);
    while (this.stackTwo.top) {
      this.stackOne.push(this.stackTwo.pop());
    }
  }


  dequeue(pref) {

    let returnAnimal = null;

    if (this.stackTwo.isEmpty()) {
      throw Error('connot empty a empty shelter');
    }

    while (this.stackOne.top) {
      if (this.stackOne.top.value.type === pref) {
        returnAnimal = this.stackOne.pop();
      }
      else {
        this.stackTwo.push(this.stackOne.pop());
      }
      while (this.stackTwo.top) {
        this.stackOne.push(this.stackTwo.pop());
      }
      return returnAnimal;
    }
  }
}


module.exports = AnimalShelter;

