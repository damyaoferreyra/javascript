function fn(){
    return 'Code here'
}

const arrowFn = () => 'Code here'
const arrowFn2 = () => { return 'Code here'}

// funções também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
console.log(fn.prop)

// receber parâmetros
const logValue = (value, value2) => console.log(value, value2);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn)
logValue(fn.prop, 'value 2')