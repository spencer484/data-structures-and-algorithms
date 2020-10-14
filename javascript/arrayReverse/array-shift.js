var arr1 = [2, 4, 6, 8]
var x = 5;
var y = 2;

arr.push(0);

for (var i = arr.length - 1; i > y; i--) {
  arr[i] = arr[i - 1];
}

arr[y] = x;

console.log(arr);