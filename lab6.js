function findLargest(num1, num2){
    if (num1 > num2){
        return `${num1} is the largest`
    } else if(num1 < num2){
        return `${num2} is the largest`
    } else {
        return `${num1} = ${num2}`
    }
}

console.log(findLargest(10,10))