function pluralizer(noun, num){
    if (num == 1) {
        return `${num} ${noun}` 
    } else {
        switch (noun) {
            case "goose":
                return `${num} geese`
                break;
            case "sheep":
                return `${num} sheep`
                break;
            default:
                return `${num} ${noun}s`
                break;
        }
    }
}

console.log(pluralizer("goose", 2))