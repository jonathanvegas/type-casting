let fruit = 'grapes'
switch (fruit) {
    case 'pear':
        console.log('Nice love those pears')
        break;
    case 'pinneaple':
        fruit = 'strawberry' 
        console.log('Good for pina colada', 'with', fruit)

    default:
        console.log('out of fruit', fruit )
        break;
}

let cost = 8.45
cost = 6

switch (cost) {
    case cost < 7 && cost > 5:
        console.log('just right price')
        break
    default:
        console.log('too expensive')
}

