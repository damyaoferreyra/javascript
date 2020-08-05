// é a elevação das variáveis e funções dentro do escopo que ela se encontra
// variável : elevada apenas a assinatura.
//  função : elevada por completo
function hoistingVariavel(){
    console.log(text) // retorna undefined - significa que a variável não foi iniciada 

    var text = "Hoisting de variável"
    
    console.log(text)
}


function hoistingFuncao(){
    
    log("Hoisting de função")

    function log(value){
        console.log(value)
    }
}


hoistingVariavel()
hoistingFuncao()