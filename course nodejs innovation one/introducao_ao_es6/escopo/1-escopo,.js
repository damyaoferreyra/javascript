/*
    // escopo global

    {
        // escopo de bloco
    }

    function exemplo(){
        // escopo de função
    }

    let - escopo de bloco
    var - escopo de função ou escopo global
    const - escopo de função ou escopo global
*/


var test = 'exemple';

function e(){console.log(test)}
e()


(()=>{
    console.log(`Valor dentro da função ${test}`) // test undefined

    if(true){
        var test = 'exemple'
        let variavelEscopoBloco = 'Esta variável só existe dentro do bloco que foi criada.'
        console.log(`Vallor dentro do if ${test}`);
        console.log(`Vallor dentro do if ${variavelEscopoBloco}`);
    }

        //console.log(`Vallor dentro do if ${variavelEscopoBloco}`); // ReferenceError
        console.log(`Valor após a execução do if ${test}`);
})()