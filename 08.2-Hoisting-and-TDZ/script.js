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

/* // THIS keyword
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
f() */

// var firstName = 'John'

/* const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this)
    console.log(2037 - this.year) */

// Solution 1
/*     const self = this // self or that
    const isMillenial = function () {
      console.log(self)
      console.log(self.year >= 1981 && self.year <= 1996)
      //   console.log(this.year >= 1981 && this.year <= 1996)
    } */

// Solution 2
/*     const isMillenial = () => {
      console.log(this)
      console.log(this.year >= 1981 && this.year <= 1996)
    }
    isMillenial()
  },

  // Never use arrow functions as methods
  greet: () => {
    console.log(this)
    console.log(`Hey ${this.firstName}`)
  },
}
jonas.greet()
jonas.calcAge() */

// Arguments keyword
/* const addExpr = function (a, b) {
  console.log(arguments)
  return a + b
}
addExpr(2, 5)
addExpr(2, 5, 6, 7, 34, 8)
var addArrow = (a, b) => {
  console.log(arguments)
  return a + b
}
addArrow(2, 5, 8) */

// Primitives vs Objects
/* let age = 30
let oldAge = age
age = 31
console.log(age)
console.log(oldAge)

const me = {
  name: 'Jonas',
  age: 30,
}
const friend = me
friend.age = 27
console.log('Friend:', friend)
console.log('Me:', me) */

// Primitive types
let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName, oldLastName)

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}
const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log('Before marrige:', jessica)
console.log('After marrige:', marriedJessica)

// marriedJessica = {}

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before marrige:', jessica2)
console.log('After marrige:', jessicaCopy)
