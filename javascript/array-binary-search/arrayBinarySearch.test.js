

describe('Testing binary search for middle number', () => {
  it('Return a index number of the value wanted in the array', () => {
    let array = [11, 22, 33, 44, 55, 66, 77]


    function binarySearch(arr, val) {
      let high = arr.length - 1;
      let low = 0;
      let mid = 0;

      while (low <= high) {
        mid = Math.floor((high + low) / 2)
        // middle == value being searched
        if (arr[mid] == val) {
          // return value
          return [mid];
        } else if (val > arr[mid]) {
          // move the low up one
          low = mid + 1;
        } else {
          // move the high down one
          high = mid - 1;
        }
      }
      return -1;
    }

    binarySearch(array, 15);

    expect(binarySearch(array, 15).toEqual(2));
    expect(binarySearch(array, 90).toEqual(-1));

    // console.log(binarySearch(array, 90));
  })
})