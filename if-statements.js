/*
let animal = 'cat' //global scope

animal = 'Dog'
animal = 'snake'
if (animal === 'dog' || animal === 'Dog' || animal === 'snake') {
    animal = 'snake' //block scope
    console.log('woof', animal)
} else{
    console.log('Your animal is', animal)
}

let person = 'mammal'
person = 'not mammal'
person = false || 'test'
person = false || null || undefined

console.log('person before if:', person)

if (person === 'Mammal') {
    console.log('yes though so!')
} else if(person && true){
    console.log('not sure')
} else if(person === 'not mammal'){
    console.log('this is catch all')
} else{
    console.log('catch all')
}
*/
//DATE

const date = new Date()
console.log(date)

const time = date.getTime()
console.log(time)

const hours = date.getHours()
console.log(hours)

if (hours > 12){
    console.log('Is past lunch time')
} else if(hours <= 11.50){
    console.log('Is almost lunch time')
}

const today = date.getDate()
console.log(today)

if(today === 12) {
    console.log('Happy July 12')
}

if(today === 12) console.log('Happy July 12')