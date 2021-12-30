// var func = function () {
//   console.log(this);
// }.bind(1);

// func();
// function checkFun(a, b, c) {
//   console.log(this);
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// checkFun.call(1, 2, 3, 4);
// function checkFun(a, b, c) {
//   console.log(this);
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// checkFun.apply(1, [2, 3, 4]);
// var updateZipCode = function (newZip, country) {
//   console.log(newZip + " " + country);
// };
// var zipCode = {
//   zip: "11787",
// };
// updateZipCode.apply(zipCode, ["11888", "us"]);
// "use strict";
// var zipcode = {
//   checkZipcode: function () {
//     console.log(this);
//     function updateZipCode() {
//       console.log(this);
//     }
//     updateZipCode.call(this);
//   },
// };
// zipcode.checkZipcode();
// "use strict";
// var zipcode = {
//   checkZipcode: function () {
//     console.log(this);
//     var updateZipCode = function () {
//       console.log(this);
//     }.bind(this);
//     updateZipCode();
//   },
// };
// zipcode.checkZipcode();

"use strict";
var person = {
  name: "Jack",
  prop: {
    name: "Daniel",
    getName: function () {
      return this.name;
    },
  },
};

var name = person.prop.getName.bind(person);
console.log(name());

var name = person.prop.getName();
console.log(name);
