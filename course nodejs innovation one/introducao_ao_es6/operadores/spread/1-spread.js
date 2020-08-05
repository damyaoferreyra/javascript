// itera nos itens
var nomes = ['João', 'Pedro', 'Maria', 'Cecília']
var sobreNomes = ['Ferreira', 'Alves', 'Oliveira']

var nomesSobreNomes = [...nomes, ...sobreNomes]

console.log(nomesSobreNomes)

function fn(nome1, nome2, nome3){
    console.log(nome1, nome2, nome3);
}

fn(...nomes)