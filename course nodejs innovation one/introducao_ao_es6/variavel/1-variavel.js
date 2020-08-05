// const - escopo de função e global
//      não permite reatribuição de valor

const name = 'Damião'

//name = 'João' // TypeError: Assignment to constant variable.

// let - escopo bloco
function fullname(){
    let lastName = 'Marinho';
    return `${name} ${lastName}`
}

console.log(fullname())
// console.log(lastName) // ReferenceError: lastName is not defined