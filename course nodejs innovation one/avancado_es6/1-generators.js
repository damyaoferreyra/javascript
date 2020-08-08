// generator são funções que podem ser pausadas durante a execução
// através da palavra chave yield

function *random(){
    while(true){
        let value = yield Math.random() * 100;
        console.log(value);
    }
}

console.log(random().next());
console.log(random().next());
console.log(random().next());
console.log(random().next());
console.log(random().next());
console.log(random().next());

function* hello(){
    console.log("call one")
    yield "retornando parametros"
    console.log("call two")
    let params = yield
    console.log("call three")
    console.log('parametro recbido', params)
}

const it = hello()
console.log(it.next())
it.next()
console.log(it.next("enviando parametros"))