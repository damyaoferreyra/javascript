
// // callback
// function doSomething(fnCallback){
//     setTimeout(()=>{
//         fnCallback({messege: 'call function, doSomething'})
//     }, 1000)
// }

// function doOtherThing(fnCallback){
//     setTimeout(()=>{
//         fnCallback({messege: 'call function, doOtherThing'})
//     }, 1000)
// }

// function doAll(){
//     doSomething((value)=>{
//         console.log(value)

//         doOtherThing((value2)=>{
//             console.log(value2);
//         })
//     })
// }

// doAll()


// promise
// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({messege: 'call resolved, myPromise'})
//     }, 1000)
// })

// myPromise.then( data => console.log(data))

// const myPromise2 = new Promise((resolve, reject)=>{
//     throw new Error('Something went wrong, function myPromise2');
//     setTimeout(()=>{
//         resolve({messege: 'call resolved, myPromise'})
//     }, 1000)
// })

// myPromise.then( data => console.log(data))
// myPromise2.then( data => console.log(data)).catch( error => console.log(error))

// promise state
// Pending - pendente
// Fuldfilled - termina a execução
// Rejected - rejeitada

// encadeando promise

const promiseOne = (parameter) => new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log(parameter);
        resolve("run promiseOne")
    }, 5000)
})
const promiseTwo = () => new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("run promiseTwo")
    }, 5000)
})
const promiseThree = () => new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("run promiseThree")
    }, 5000)
})


// promiseOne().then(data => {
//     console.log(data);
//     return promiseTwo()
// })
// .then(data => {
//     console.log(data);
//     return promiseThree()
// })
// .then(data => console.log(data)).catch(error => console.log('Ops', error))



// executando promise em paralelo
Promise.all([promiseOne({messege: 'pass parameter'}), promiseThree()]).then(data => console.log("Paralelo", data)).catch(error => console.log(error))

// executar a promise que resolver primeiro
Promise.race([promiseOne(), promiseThree()]).then(data => console.log("First resolved promise", data)).catch(error => console.log(error))
