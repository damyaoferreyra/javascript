const objeto = (function(){
    div = "OLA"
    return{
        name: ()=>{
        console.log(`Damião ${this.div}`)
    }
}
})();

objeto.name()