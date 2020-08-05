// change the function without changing it explicity
let loggedIn = false

function callIfAuthenticated(fn){
    return !!loggedIn  && fn()
}

function sum(a, b){
    return a + b
}

console.log(callIfAuthenticated(()=> sum(1,2)));
loggedIn = true
console.log(callIfAuthenticated(()=> sum(1,2)));
loggedIn = false
console.log(callIfAuthenticated(()=> sum(1,2)));