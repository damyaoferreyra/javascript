class Math{
    sum(a, b, callback) {
        setTimeout(()=>{
            callback(a + b)
        }, 2500)
    }
    exemple(value){
        return `hello world ${value}`
    }
    printSum(req, res, a, b){
        console.log(res.load('index', a+b))
    }
}

module.exports = Math;