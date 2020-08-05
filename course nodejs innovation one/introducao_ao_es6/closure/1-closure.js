// é a capacidade da função lembrar do ambiente que ele foi criada - escopo léxico

function init(){
    const myClosure = "variavel acessível e com o mesmo valor em todas as demais função do escopo."
    return function(){
        console.log(`1 - o valor da variável myClosure é: ${myClosure}`)
        
        return function(){
            console.log(`2 - o valor da variável myClosure é: ${myClosure}`)

            return function(){
                console.log(`3 - o valor da variável myClosure é: ${myClosure}`)
            }
        }
    }

}

init()()()()