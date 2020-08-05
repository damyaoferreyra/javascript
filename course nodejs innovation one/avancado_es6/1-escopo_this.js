var obj = {
    showContext: function showContext(){
        this.log(this) // this referecia o objeto
    },
    log: function log(value){
        console.log(value)
    }
}

obj.showContext()

// 1 - problema
// exibir o log após 1000 ms

// var obj = {
//     showContext: function showContext(){
//         setTimeout(function(){
//             this.log(this) // error, this.log is not a function, o this é da função setTimeout
//         }, 1000)
//     },
//     log: function log(value){
//         console.log(value)
//     }
// }

// obj.showContext()

// 1 solucao

// var obj = {
//     showContext: function showContext(){
//         setTimeout(function(){
//             this.log(this) // error, this.log is not a function, o this é da função setTimeout
//         }.bind(this), 1000)
//     },
//     log: function log(value){
//         console.log(value)
//     }
// }

// obj.showContext()

// 2 solucao

var obj = {
    showContext: function showContext(){
        var _that = this

        setTimeout(function(){
            _that.log(_that) // error, this.log is not a function, o this é da função setTimeout
        }, 1000)
    },
    log: function log(value){
        console.log(value)
    }
}

obj.showContext()

// 3 solucao - arrow function

var obj = {
    showContext: function showContext(){
    
        setTimeout(()=>{
            this.log({this: this, messege: 'this referenciando escopo lexico, isto é, escopo de criação'}) // error, this.log is not a function, o this é da função setTimeout
        }, 1000)
    },
    log: function log(value){
        console.log(value)
    }
}

obj.showContext()