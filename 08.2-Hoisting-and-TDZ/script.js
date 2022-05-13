'use strict'
/* // Hoisting with variables
// undefined
console.log(me)

// Uncaught ReferenceError: Cannot access 'job' before initialization
console.log(job)

// Uncaught ReferenceError: Cannot access 'year' before initialization
console.log(year)

var me = 'Jonas'
let job = 'teacher'
const year = 1991 */

/* // Hoisting with functions
// Works great!
console.log(addDecl(2, 3))

// Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addExpr(2, 3))

// Uncaught TypeError: addArrow is not a function
console.log(addArrow(2, 3))

function addDecl(a, b) {
  return a + b
}
const addExpr = function (a, b) {
  return a + b
}
var addArrow = (a, b) => a + b */

/* // Example
console.log(undefined)
if (!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart() {
  console.log(`All products deleted!`)
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z) */

// THIS keyword
console.log(this)

// Function expression
const calcAge = function (birthYear) {
  console.log(2037 - birthYear)
  console.log(this)
}
calcAge(1991)

// Arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear)
  console.log(this)
}
calcAgeArrow(1980)

// Method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)
  },
}
jonas.calcAge()

const matilda = {
  year: 2017,
}

// Method borrowing
matilda.calcAge = jonas.calcAge
matilda.calcAge()

const f = jonas.calcAge
f()
