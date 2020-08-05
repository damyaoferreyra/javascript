function multiply(a = 2, b = 2) {
    return a * b
}

console.log(multiply(2,3))

function multiply(a = 2, b = a) {
    return a * b
}

console.log(multiply(2))


// lazy evaluation
// os valores default dos parâmetros são atribuidos em tempo de execução
function randomNumber(){
    console.log('Generating a random number....')
    return Math.random() * 10
}

function sumRandom(a = 1, b = randomNumber()){
    return a + b
}

console.log(sumRandom(2));