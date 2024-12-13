function foo(a, b) {
  // Assign default values if inputs are null
  const aValue = a === null ? 0 : a;
  const bValue = b === null ? 0 : b;

  return aValue + bValue;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0