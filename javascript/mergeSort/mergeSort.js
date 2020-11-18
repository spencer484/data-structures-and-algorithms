



function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    }
    else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

function mergeSort(arr) {
  if (arr.length === 1)
    return arr;

  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2), arr.length);
  left = mergeSort(left);
  right = mergeSort(right);

  return mergeArrays(left, right);
}


mergeArrays([8, 4, 23, 42, 16, 15]);


module.exports = { mergeArrays, mergeSort };



