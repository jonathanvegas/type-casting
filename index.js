// Convert number to string

let num = 23
num = 45
const toText = String(num)
console.log(num)
console.log(toText)

// Convert string to number
const myString = '24'
const toNumber = Number(myString)
console.log(toNumber)

//Convert boolean to number
console.log(Number(false))
console.log(Number(true))

//Convert boolean to string
const falseStr = String(false)
const trueStr = String(true)
const num2  = 2345
const numToStr = num2.toString()
console.log(`first str ${falseStr} & second str ${trueStr} & ${numToStr}`, true)

//Check type
const str = '23'
const strType = typeof(str)
console.log(strType)

const num1 = 234
const numType = typeof(num1)
console.log(numType)

//Booleans
console.log(true == true)
console.log(true == 'true')
console.log('true' == true)

console.log('true' === true)
console.log(true === 'true')

const checkNum = 100
console.log(checkNum == true)

const checkNum2  = 7 + 1 + 2.34
console.log(checkNum2 === true)
console.log(checkNum2 && true)
console.log(checkNum2 && false)
console.log(checkNum2 && false && false & false)

console.log(checkNum2 || false)
console.log(undefined || false)
console.log(3 || false)
console.log(null || 578 || 'test' || true)
const nullNum = -0
console.log(null || nullNum || 'test' || true)
console.log(null || nullNum || 'test' && true)


// COMPARISIONS
let isEqual = 78 < 90
isEqual = 78 <= 78
isEqual = 78 >= 100
isEqual = 78 != 100
console.log(isEqual)

