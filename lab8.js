function checkInRange(startRange, endRange, num){
    if (num >= startRange && num <= endRange) {
        return "Between the range"
    } else {
        return "Outside the range"
    }
}

console.log(checkInRange(4,10,1))