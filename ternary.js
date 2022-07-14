const date = new Date()
console.log(date)

const hour = date.getHours()
console.log(hour)

let greeting
if (hour > 12) {
    greeting = 'afternoon'
} else {
    greeting = 'morning'
}

let message1 = `Message 1: good ${greeting} class`
console.log(message1)

//same as
let message2 = `Message 2: good ${hour > 12 ? 'afternoon' : 'morning'} class`
console.log(message2)

