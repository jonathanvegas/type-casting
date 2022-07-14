function evalNumbers(num1, num2){
    if (!isNaN(num1) && !isNaN(num2)) {
        return  `${num1} + ${num2} is ${num1 + num2}\n` +
                `${num1} - ${num2} is ${num1 - num2}\n` +
                `${num1} * ${num2} is ${num1 * num2}\n` +
                `${num1} / ${num2} is ${num1 / num2}\n` +
                `${num1} MOD ${num2} is ${num1 % num2}`
    } else {
        return "Invalid Operation"
    }
}

console.log(evalNumbers(10,10))