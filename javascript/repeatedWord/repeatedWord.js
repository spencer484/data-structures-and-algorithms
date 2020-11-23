const Hashtable = require('./hastTable');

module.exports = (string) => {

  let wordArray = string.toLowerCase().split(/[\W]+/g);
  const wordHash = new Hashtable(wordArray.length);

  for (let word of wordArray) {

    if (wordHash.contains(word)) {
      return word;
    }
    else {
      wordHash.add(word, word);
    }
  }

  throw Error('No repeating words in input');
};

