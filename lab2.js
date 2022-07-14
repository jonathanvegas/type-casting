function helloWorld(langCode){
    switch (langCode) {
        case 'es':
            return "Hola Mundo"
            break;
        case 'pg':
            return "Olá Mundo"
            break;
        case 'ch':
            return "你好世界"
            break;
        default:
            return "Hello World"
            break;
    }
}

console.log(helloWorld('ch'))