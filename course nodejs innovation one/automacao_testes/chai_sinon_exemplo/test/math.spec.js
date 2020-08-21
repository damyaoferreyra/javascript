// npm i --save-dev mocha
// npm i --save-dev sinon
// npm i --save-dev chai

const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

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
          // assert.equal(value, 10);
            expect(value).to.equal(10) // usando o expect
            done(); // aguarda a execução completa do teste : execução assíncrona
        })   
    });

    //todo teste pendente, falta terminar a implementação, quando rodarmos o teste irá exibir pending
    it('Multiply two numbers')
    
    // it.only() : especifica qual o unico teste a ser executado
    // it.skip() : ignora o teste

    it('Exemplo test', function(){
        const math = new Math(); 
        //assert.equal(math.exemple(value), `hello world ${value}`)
        expect(value).to.equal(10) // usando o expect
    })

    it('chai exemplo', function(){
        const ob = {
            name : 'João'
        }

        expect(ob).to.have.property('name')
    })

    //usando sinon para mock de functions

    it.only('Calls res with sum and index values', function(){
        const req = {}
        const res = {
            // load: sinon.spy(), // espiona a funcao
            load: function(){
                console.log('Exemplo de sobreescrita')
            }
        }

        //sinon.spy(res, 'load') // espiona a funao
        sinon.stub(res, 'load').returns('xpto') // sobreescrita

        const math = new Math()
        math.printSum(req, res, 5, 5)

        expect(res.load.calledOnce).to.be.true // verifica se a funcao fora chamada um vez
    })
})