/*
Create a function that accepts a list/array and a number n, 
and returns a list/array of the first n elements from the 
list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/

function take(arr, n) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    if(i === n - 1) {
      break;
    }
  } 
  return res;
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)) //> [0, 1, 2]
console.log(take(["a", "b", "c", "d"], 3)) //> ["a", "b", "c"]