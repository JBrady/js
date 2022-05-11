'use strict'

// LECTURE: Values and Variables
/*
1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
2. Log their values to the console
*/

/* let country = 'USA'
let continent = 'North America'
let population = 330000000
console.log(country, continent, population) */

// LECTURE: Data Types
/*
1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language' to the console
*/

/* let country = 'USA'
let continent = 'North America'
let population = 330000000
console.log(country, continent, population)
let isIsland = false
let language

console.log(typeof country)
console.log(typeof continent)
console.log(typeof population)
console.log(typeof isIsland)
console.log(typeof language) */

// LECTURE: let, const and var
/* 
1. Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens 
*/

/* let country = 'USA'
let continent = 'North America'
let population = 330000000
console.log(country, continent, population)
let isIsland = false
let language

console.log(typeof country)
console.log(typeof continent)
console.log(typeof population)
console.log(typeof isIsland)
console.log(typeof language)
language = 'english' */

// LECTURE: Basic Operators
/* 
1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than Finland?
4. The average population of a country is 33 million people. Does your country have less people than the average country?
5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese' 
*/

/* console.log(population / 2)
population++
console.log(population)
console.log(population > 6)
console.log(population < 33)
const description1 =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language
console.log(description1) */

// LECTURE: Strings and Template Literals
/* 1. Recreate the 'description' variable from the last assignment, this time using the template literal syntax */

/* const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description2) */

// LECTURE: Functions
/*
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/

// Function Expression
/* const describeCountry = function (country, population, capitalCity) {
  const desc = console.log(
    `${country} has ${population} people and its capital city is ${capitalCity}`
  )
  return desc
}

const country1 = describeCountry('USA', 320000000, 'Washinton DC')
const country2 = describeCountry('Mexico', 200000000, 'Mexico City')
const country3 = describeCountry('Finland', 40000000, 'Helsinki') */

// Function Declaration
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`
}
const descPortugal = describeCountry('Portugal', 10, 'Lisbon')
const descGermany = describeCountry('Germany', 83, 'Berlin')
const descFinland = describeCountry('Finland', 6, 'Helsinki')
console.log(descPortugal, descGermany, descFinland)
