try{

    console.log(name)
    const name = "Hello, const not hoisting"

}catch(error) {
    console.log(error)
}

console.log('Run code - ok')

class CustomError extends Error{
    constructor({messege, data}){
        super(messege)
        this.data = data
    }
}

try{
    const myError = new CustomError({
        messege: 'Server error', 
        data:{
            type: '500'
        }
    })
    
    throw myError; 
}catch(error){
    console.log(error.data.type)
}finally{
    console.log('finally run code')
}