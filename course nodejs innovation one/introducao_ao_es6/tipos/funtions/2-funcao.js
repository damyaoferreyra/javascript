(()=>{
    this.name = 'arrow function';
    // o this em arrowFunction referencia ao escopo global
    const getNameArrowFn = () => this.name;

    // o this referencia ao contexto do objeto de execução
    function getName(){
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})()