// destructuring assignment
var fruits = ['Maça','Goiaba', 'Melão']

const [maca, goiaba, melao] = fruits
console.log(maca);

var all = ['Maça','Goiaba', 'Melão', ['Abacaxi'], {name:'Damiao'}]

const [maca2, goiaba2, melao2, array, obj] = all
console.log(maca2);
console.log(array);
console.log(obj);

var veiculo = {
    marca: 'Audi',
    props:{
        cores:['azul', 'Vermelho']
    }
}

const {marca} = veiculo
console.log(marca);

// renomeando a variável
var {marca: marca2, props: {cores:[azul, vermelho]}} = veiculo
console.log(marca2, vermelho);

// functions
function sum([a, b]  = [0,0]){
    return a + b
}
console.log(sum([1,2]));