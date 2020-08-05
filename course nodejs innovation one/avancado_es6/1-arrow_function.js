var sum = (a,b) => a + b

console.log(sum(1,2));

var sum = a => 1 + a
console.log(sum(1));


var person = {
    name: 'João',
    message: 'Hello world'
}
var message = ({name, message}) => {
    console.log(`${name} - ${message}`)
}

message(person)

var sumAll = (...values) => values.reduce( (all, value) => all += value, 0);

console.log(sumAll(1,2,3,4));

// default values
var welcomeBehavior = (name = 'unknow') => `Welcome, ${name}`

console.log(welcomeBehavior('Pedro'))
console.log(welcomeBehavior())

// return object

var createObj = () => ({test: 123})

console.log(createObj())