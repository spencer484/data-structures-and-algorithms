function partition(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return left;
  }
  let nP = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < arr[right]) {
      let temp = arr[i];
      arr[i] = arr[nP];
      arr[nP] = temp;
      nP++;
    }
  }

  let temp = arr[nP];
  arr[nP] = arr[right];
  arr[right] = temp;

  return nP;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right)
    return arr;

  let i = partition(arr, left, right);
  // Run quicksort for the portion of the array to the left of our partition index
  quickSort(arr, left, i - 1);
  // Run quicksort for the portion of the array to the right of our partition index
  return quickSort(arr, i + 1, right);
}


quickSort([8, 4, 23, 42, 16, 15]);

module.exports = quickSort;
