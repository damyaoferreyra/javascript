// sem o spread
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
    // quando necessário enviar um array outra função
    return multiply.apply(undefined, rest) //A set of arguments to be passed to the function. Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
}

console.log(sum(1,2, 3))

// usando spread operator
// pode ser usado em string, arrays, literal objects  e objetos iteraveis

const multiply2 = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum2 = (...rest) => {
    return multiply2(...rest) // usando spread
}

console.log(sum2(1,2, 3))

//  spread operator with string
const str = 'Digital Innovation One'

function logArgs(...args){
    console.log(args)
}

logArgs(...str)

//  spread operator with arrays
const names = ['Damian', 'Bob']

logArgs(...names)

// construir array com spread operator
// antes
const lastNames = ['Ferreira', 'Oliveira']
const fullNames = names.concat(lastNames)
console.log(fullNames)

// com spread operator
const fullNames2 = [...names, ...lastNames]
console.log(fullNames2)

// spread operator with object
const person = {
    name: 'Damião',
    lastName: 'Ferreira'
}

const person2 = {
    ...person,
    lastName: 'Alves'
}

console.log(person);
console.log(person2);

// ordem do spread, altera os valores
const person3 = {
    lastName: 'Alves',
    ...person
}

console.log(person3, 'Não alterou o sobrenome');

// use spread operator para criar uma copia do objeto
const animal = {
    acao: 'Andar',
    nome: 'Marley'
}

const animal2 = {...animal}

animal2.nome = 'Caramelo'
console.log(animal);
console.log(animal2);

// caso não usar o spread operator
console.log('Alterou o nome no objeto de origem também');
const animal3 = {
    acao: 'Andar',
    nome: 'Marley'
}

const animal4 = animal3

animal4.nome = 'Caramelo'
console.log(animal3);
console.log(animal4);

// caso o objeto de origem tenha subObjeto
// spread operator = shallow clone, clone raso, caso o objeto de origem tenha subObjeto, será necessário sobreescreve lo
const animal5 = {
    nome: 'Marley',
    comportamento:{
        default: 'Andar'
    }
}

const animal6 = {...animal5, comportamento: {...animal5.comportamento}}
animal6.comportamento.default = 'Latir'
console.log(animal5);
console.log(animal6);