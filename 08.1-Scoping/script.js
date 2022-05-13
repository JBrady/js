'use strict'

function calcAge(birthYear) {
  const age = 2037 - birthYear

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'

      // Reassigning outer scope's variable
      output = `NEW OUTPUT!`

      const str = `Oh, and you're a millenial ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }
    }
    // Throws error 'str is not defined' because its outside the scope
    // console.log(str)

    // Correct scope
    console.log(millenial)
    // console.log(add(2, 3))
    console.log(output)
  }
  printAge()
  return age
}

const firstName = 'Jonas'
calcAge(1991)

// Throws errors because they are not in the correct scope
// console.log(age)
// printAge()
