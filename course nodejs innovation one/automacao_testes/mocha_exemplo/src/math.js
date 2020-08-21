class Math{
    sum(a, b, callback) {
        setTimeout(()=>{
            callback(a + b)
        }, 2500)
    }
    exemple(value){
        return `hello world ${value}`
    }
}

module.exports = Math;