// antes ES6
// arguments : protoType  Object
function sumOld(a, b){
    console.log(arguments) // arguments : variável reservada, aguarda todos os argumentos passados a função
    var value = 0;
    for (var i = 0; i < arguments.length; i++){
        value+= arguments[i]
    }
    
    return value;
}
console.log(sumOld(1,2,3,4))

// rest operator ...
// protoType = Array

function sumNew(...args){
    return args.reduce((acc, value)=> acc += value, 0)
}

console.log(sumNew(1,2,3,4))

// acessando o restante dos parâmetros
function sumNew1(a, b, ...args){
    console.log(a, b)
    return args.reduce((acc, value)=> acc += value, 0)
}

console.log(sumNew1(1,2,3,4))


//Arrow function não tem acesso a variável arguments
// const printArguments = () => {
//     console.log(arguments);
// }

// printArguments();