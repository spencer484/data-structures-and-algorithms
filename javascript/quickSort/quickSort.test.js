

const quickSort = require('./quickSort');

describe('Testing for quick sort', () => {
  test('The array becomes sorted', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(quickSort(arr)).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
});

