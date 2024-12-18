function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Correct handling of null values
  } else if (a === null || b === null) {
    return NaN; //Handle null values more appropriately
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3