// npm i --save-dev mocha
const assert = require('assert')
const Math = require('../src/math.js')

let value = 0;

describe('Math class',function(){
    //hooks : funções que são executadas com o ciclo de vida dos testes
    // before, after, afterEach
    // usadas para limpar mocks, criar classes, criar componentes, etc.
    // executa a função em cada iteração
    beforeEach(function(){
        value = 0
    })

    it('Sum two numbers', function(done){

        this.timeout(3000) // default 2500, mocha espera 2500 milissegundos por padrão para aguardar a execução de processos assíncronos.

        value = 5


        const math = new Math(); 
        math.sum(value,5, value => {
            assert.equal(value, 10);
            done(); // aguarda a execução completa do teste : execução assíncrona
        })   
    });

    //todo teste pendente, falta terminar a implementação, quando rodarmos o teste irá exibir pending
    it('Multiply two numbers')
    
    // it.only() : especifica qual o unico teste a ser executado
    // it.skip() : ignora o teste

    it('Exemplo test', function(){
        const math = new Math(); 
        assert.equal(math.exemple(value), `hello world ${value}`)
    })
})