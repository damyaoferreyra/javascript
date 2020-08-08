// ES7 - Async / Await
// uma forma de criar promises
const myPromiseAsync = async () => {
    return 'Exemplo'
}

console.log(myPromiseAsync()
.then(data => console.log(data))
.catch(err => console.log(err)));

// ---------------------------------------------------------
// await - aguarda a promise ser resolvida
// Exemplo de processamento assíncrono sequencial
const myPromiseAsync1 = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('asyncTimer')
    }, 1000)
})

const myPromiseAsync2 = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('asyncTimer2')
    }, 1000)
})


const calllMyPromiseAsync = async () => {
    const data1 = await myPromiseAsync1()
    const data2 = await myPromiseAsync2()
    return [data1, data2]
}

console.log(calllMyPromiseAsync()
.then(data => console.log(data))
.catch(err => console.log(err)));

// Exemplo de processamento assíncrono paralelo
const myPromiseExecParalelo = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('asyncTimer')
    }, 1000)
})

const myPromiseExecParalelo2 = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('asyncTimer2')
    }, 1000)
})


const callMyPromiseExecParalelo = async () => {
    return Promise.all([myPromiseExecParalelo(), myPromiseExecParalelo2()])
}

console.log(callMyPromiseExecParalelo()
.then(data => console.log(data))
.catch(err => console.log(err)));
