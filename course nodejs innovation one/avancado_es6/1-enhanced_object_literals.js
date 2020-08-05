// shorthand
function multiply(a = 2, b = a) {
    return a * b
}

var calculator = {
    sum(a,b){
        return a+b
    },
    multiply,
    subtraction: function(a = 2, b =1){
        return a - b
    },
    
}

console.log( calculator.sum(1,2) )
console.log( calculator.multiply(2) )
console.log( calculator.subtraction(2) )