'use strict'

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30' */

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    )
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

console.log('------ OR -----')
// Use ANY data type, return ANY data type, short-cicuiting
console.log(3 || 'Jonas')
console.log('' || 'Jonas')
console.log(true || 0)
console.log(undefined || null)

console.log(undefined || 0 || '' || 'Hello' || 23 || null)

restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)

const guests2 = restaurant.numGuests || 10
console.log(guests2)

console.log('----- AND -----')
console.log(0 && 'Jonas')
console.log(7 && 'Jonas')

console.log('Hello' && 23 && null && 'Jonas')

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

/* 
// Rest Pattern and parameters
// 1) Destructuring

// SPREAD, because its on the right-hand side of the assignment operator ( = )
const arr = [1, 2, ...[3, 4]]

// REST, because its on the left side of the assignment aoperator ( = )
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]
console.log(pizza, risotto, otherFood)

// Objects
const { sat, ...weekdays } = restaurant.openingHours
console.log(weekdays)

// 2) Functions
const add = function (...numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]
  console.log(sum)
}
add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')
*/

/* 
////////////////////////////
// Spread operator (...)
// We can only use the spread operator in places were we would otherwise write values separated by commas
// Works on all 'iterables'
// Two use cases of the spread operator are to build new arrays, or to pass multiple values into a function
// We can only use the spread operator when building an array, or when we pass values into a function
const arr = [7, 8, 9]
const badNewArray = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArray)

const newArr = [1, 2, ...arr]
console.log(newArr)
console.log(...newArr)

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)
console.log(...newMenu)

// Shallow copy of an array
const mainMenuCopy = [...restaurant.mainMenu]

// Join 2 or more arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

// Iterables are arrays, strings, maps, sets. But NOT objects
const str = 'Jonas'
const letters = [...str, ' ', 'S.']
console.log(letters)
console.log(...str)
console.log(...letters)

// Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ]
// console.log(ingredients)

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)

// Since ES2018, the spread operator now works with objects (even though objects are not iterables)...
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }
console.log(newRestaurant)

// Shallow copy of an object
const restaurantCopy = { ...restaurant }
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name)
console.log(restaurant.name) */

/* 
///////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr
console.log(x, y, z)
console.log(arr)

let [main, , secondary] = restaurant.categories
console.log(main, secondary)

// Switching variables
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary)
;[main, secondary] = [secondary, main]
console.log(main, secondary)

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)

// Nested destructuring
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested
const [i, , [j, k]] = nested
console.log(i, j, k)

// Defeult values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r) 
*/

/* restaurant.orderDelivery({
  time: '23:30',
  address: 'Via Del Sole 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Via Del Sole 21',
  starterIndex: 1,
})

const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant
console.log(restaurantName, hours, tags)

// Setting a default value
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

// Mutating variables
let a = 111
let b = 999
const obj = { a: 23, b: 7, c: 14 }
;({ a, b } = obj)
console.log(a, b)

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours
console.log(o, c)
 */
