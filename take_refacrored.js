function take(arr, n) {
return arr.filter((e, i) => i <= n -1)
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)) //> [0, 1, 2]
console.log(take(["a", "b", "c", "d"], 3)) //> ["a", "b", "c"]