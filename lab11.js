function findAge(age){
    if (age >= 21) {
        return "Come on in."
    } else if (age < 21) {
        return "Go Home, you are not old enough to get in."
    } else {
        return "please give me your age."
    }
}

console.log(findAge("x"))




// LAB 11 - Find if someone is old enough to go in the bar.
// Use a Function `findAge()` and If-else statements to find the age of the student based on their age.

// Print "Come on in." if age is 21 or older.
// Print "Go Home, you are not old enough to get in." if age is less than 21.
// Else print "please give me your age." if a number is not given.