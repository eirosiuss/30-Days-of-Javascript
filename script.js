console.log("Day 1");
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// Example 1:
// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"
// The function returned by createHelloWorld should always return "Hello World".
// Example 2:
// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"
// Any arguments could be passed to the function but it should still always return "Hello World".
// Constraints:
// 0 <= args.length <= 10

let createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f());

console.log("Day 2");
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Example 1:
// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:
// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

let createCounter = function (n) {
  let a = 0;
  return function () {
    n += a;
    a = 1;
    return n;
  };
};
const counter = createCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
