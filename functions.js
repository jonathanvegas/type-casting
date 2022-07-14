
//function sum(x,y) {
const sum = (x,y) => {
    if (typeof(x) != "number"){
        return "no no no!"
    }
    if (y == undefined){
        return x
    } else {
        return x + y
    }
}

const results = sum(3,2)
console.log(results)