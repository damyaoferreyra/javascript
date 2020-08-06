// Symbols - identificador único

const uniqueId = Symbol('hello')
const uniqueId2 = Symbol('hello')

console.log(uniqueId === uniqueId2); // false

// Pode ser utilizado para deixar claro que não devemos alterar a propriedade - 'privada'
const obj = {
    [uniqueId]: 'exemplo'
}

console.log(Object.keys(obj)); // as propriedades Symbols não serão exibidas
console.log(Object.getOwnPropertySymbols(obj)); // as propriedades Symbols são acessíveis

// Well Know symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag


const arr = [1,2,3,4]
const it = arr[Symbol.iterator]()

// iterando no arr 1
while(true){
    let {value, done} = it.next()
    
    if(done) break
    
    console.log(value);
}

// iterando no arr 2
for (const item of arr) {
    console.log(item)
}

// Tornando o objeto iteravel

const objIterator = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () =>{
                i++;
                return{
                    value: this.values[i-1],
                    done: i > this.values.length
                   
                }
            }
        }
    }
}

const iteratorObject = objIterator[Symbol.iterator]()
console.log(iteratorObject.next())
console.log(iteratorObject.next())
console.log(iteratorObject.next())
console.log(iteratorObject.next())
console.log(iteratorObject.next())