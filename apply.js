function checkFun(a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
}
checkFun.apply(1, [2, 3, 4]);
// ================================================================

function sumOfNumbers() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
var numbers = [1, 2, 3];
var sum = sumOfNumbers.apply(null, numbers);
console.log(sum);
