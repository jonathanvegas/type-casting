function assignGrade(score){
    switch (score) {
        case 5:
            return "A"
            break;
        case 4:
            return "B"
            break;
        case 3:
            return "C"
            break;
        case 2:
            return "D"
            break;
        case 1:
            return "F"
            break;
        default:
            return "No Grade"
            break;
    }
}

console.log(assignGrade(5))