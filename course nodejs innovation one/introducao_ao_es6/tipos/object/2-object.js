const user = {
    name: 'Damião',
    job: 'Software developer'
}
// Recupera as chaves do objeto
console.log(Object.keys(user));

// Recupera os valores das chaves do objeto
console.log(Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log(Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Damião Ferreira'}) // pensando em imutabilidade, isto não é recomendado
console.log(`\nAdiciona a propriedade fullName ao objeto user `, user);

// melhor fazer assim
console.log("\nImutabilidade aplicada");
console.log('Novo objeto: ',Object.assign({}, user, {age: 25}))
console.log('Objeto anterior: ', user);

// Previne todas as alterações em um objeto
// Não permite alterar o objeto e suas propriedades
console.log("-------freeze-------")
const objFreeze = {foo: 'bar'}
Object.freeze(objFreeze)

objFreeze.foo = 'changes'
delete objFreeze.foo
objFreeze.bar = 'foo'

console.log('Não alterou o objeto ', objFreeze)

// Previne as alterações na estrutura do objeto
// Não permite alterar o objeto, apenas suas propriedades

console.log("-------seal-------")
const objSeal = {foo: 'bar'}
Object.freeze(objSeal)

objSeal.foo = 'changes'
delete objSeal.foo
objSeal.bar = 'foo'

console.log('Alterou o valor da propriedade foo ', objSeal)