'use strict'

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30' */

// Data needed for first part of the section

const weekdays = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun']
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // ...old way
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  // },

  // ...new way using ES6 enhanced object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    )
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

// MAPS
const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'))

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(false))
console.log(rest.get(1))

const time = 21
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2)
// rest.clear()

const arr = [1, 2]
rest.set(arr, 'Test')
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest)
console.log(rest.size)

console.log(rest.get(arr))

/* 
// SETS
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
])
console.log(ordersSet)

console.log(new Set('Jonas'))
console.log(new Set())

console.log(ordersSet.size)
console.log(ordersSet.has('Pizza'))
console.log(ordersSet.has('Bread'))
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
ordersSet.delete('Risotto')
// ordersSet.clear()
console.log(ordersSet)

for (const order of ordersSet) console.log(order)

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const staffUnique = [...new Set(staff)]
// const staffUnique = new Set(staff)
// console.log(staff)
console.log(staffUnique)
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
)
 */

/*
// Looping Objects: Object Keys, values and entries

// Property NAMES
const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open ${properties.length} days a week: `

for (const day of properties) {
  openStr += `${day},`
}
console.log(openStr)

// Property VALUES
const values = Object.values(openingHours)
console.log(values)

// Entire object
const entries = Object.entries(openingHours)
// console.log(entries)

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open}, and close at ${close}`)
} 
*/

/* 
// Optional Chaining
// without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open)

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

// Real world example
const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun']

for (const day of days) {
  // console.log(day)
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`)
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does NOT exist')
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does NOT exist')

// Arrays
const users = [
  {
    name: 'Jonas',
    email: 'hello@jonas.io',
  },
]

console.log(users[0]?.name ?? 'User array empty') */

/* 
// The for-of loop
// ...the old way
console.log('---- The Old Way -----')
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i])
}

// ...the new way
// Prints the current element
console.log('---- The New Way (for-of loop)-----')
for (const item of menu) console.log(item)

// Prints the current index and the current element
for (const item of menu.entries()) {
  // console.log(item)
  // A nicer way of laying out the information
  console.log(`${item[0] + 1}: ${item[1]}`)
}

// ...the new way, destructured
// Use the destructuring assignment ([]), and create the two variables that we want (item and element)
for (const [item, element] of menu.entries()) {
  console.log(`${item + 1}: ${element}`)
}

// The entries method creates an array with a new array in each position containing the element and index position
// console.log([...menu.entries()])
 */

/* 
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10
rest2.numGuests ??= 10

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1)
console.log(rest2)
 */

/* 
// The Nullish Coalescing Operator
restaurant.numGuests = 0
const guests = restaurant.numGuests || 10
console.log(guests)

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)
 */

/* 
// Short Circuiting (&& and ||)
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

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') */

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

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}
// 1.
const [players1, players2] = game.players
console.log(players1, players2)

// 2.
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

// 3.
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final)

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game
console.log(team1, draw, team2)

// 6.
const printGoals = function (...players) {
  console.log(players)
  console.log(`${players.length} goals were scored`)
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals('Davies', 'Muller')
printGoals(...game.scored)

// 7.
team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 2 is more likely to win') */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

// 1.
for (const [index, player] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${player}`)

// 2.
const odds = Object.values(game.odds)
let average = 0
for (const odd of odds) average += odd
average /= odds.length
console.log(average)

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
 */
