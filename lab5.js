function isNumber(num){
    if (isNaN(num)) {
        return "Variable is not a number"
    } else {
        return "Variable is a valid number"
    }
}

console.log(isNumber(4))