function checkFun(a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
}
checkFun.call(1, 2, 3, 4);
// =====================================================================
function sumOfNumbers() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
var sum = sumOfNumbers.call(null, 1, 2, 3);
console.log(sum);
