function assignGrade(score){
    if (score >= 90 && score <= 100) {
        return "S grade"
    } else if (score >= 90 && score <= 100) {
        return "A grade"
    } else if (score >= 80 && score < 90) {
        return "B grade"
    } else if (score >= 70 && score < 80) {
        return "C grade"
    } else if (score >= 60 && score < 70) {
        return "D grade"
    } else if (score >= 50 && score < 60) {
        return "E grade"
    } else if (score >= 40 && score < 50) {
        return "F grade"
    } else if (score >= 0 && score < 40) {
        return "Student has failed"
    } else {
        return "Invalid marks"
    }
    /*
    switch (score) {
        case (score >= 90 && score <= 100):
            return "S grade"
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
            console.log(score)
            return "No Grade"
            break;
    }*/
}

console.log(assignGrade(-60))