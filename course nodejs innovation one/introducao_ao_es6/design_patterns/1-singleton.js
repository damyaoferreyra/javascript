// always returns the same instance
function Person(){

    if(!Person.instance){
        Person.instance = this
    }

    return Person.instance
}

const p = Person.call({name: 'Damiao'})
const p2 = Person.call({name: 'Custom name'})

console.log(p);
console.log(p2);