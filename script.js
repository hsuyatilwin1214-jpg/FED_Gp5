let myNumber = 10;
const myConstant = 5;
var myString = "Hello JS";
console.log(myNumber, myConstant, myString);

console.log(myString + "!!!");     // "Hello JS!!!"

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

const multiply = (x, y) => x * y;
console.log(multiply(3, 4)); // 12