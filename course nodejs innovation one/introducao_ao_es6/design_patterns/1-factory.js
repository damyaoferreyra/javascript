// Design pattern factory

// not use new to instance
function Person(customProperties){
    return {
        name: 'Damião',
        lastName: 'Ferreira',
        ...customProperties
    }
}

const p = Person({name: 'João', lastName: 'Silva', age: 27})
console.log(p);

// not factory
function Animal(){
    this.name = 'Turtle';
    this.message = 'Not factory'
}

console.log(new Animal());
