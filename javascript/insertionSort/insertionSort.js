

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    while (index > 0 && arr[index] < arr[index - 1]) {
      let temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index--;
    }
  }
  return arr;
}

insertionSort([8, 4, 23, 42, 16, 15]);


module.exports = insertionSort;




