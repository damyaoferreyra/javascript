const user = ['João', 'Pedro', 'Jennifer']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Pedro',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'João',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Maria',
        age: 23,
        gender: gender.WOMAN
    },
    {
        name: 'Joana',
        age: 29,
        gender: gender.WOMAN
    },
    {
        name: 'Barbara',
        age: 30,
        gender: gender.WOMAN
    },
]

// retornar a quantidade de itens do array
console.log('Items: ', persons.length);

// verificar se  é array
console.log('A variável persons é um array: ', Array.isArray(persons));

// as funções de iteração recebem (item, index, array)
persons.forEach( (person, index, arr) => {
    console.log('Name: ', person.name, ' index: ', index, 'Array: ',arr)
})

// filtrar array
const mens = persons.filter( person => person.gender === gender.MAN)
console.log('Nova lista, apenas com homens: ', mens);

// adiciona novas propriedades ao objeto
const personsWithCourse = persons.map( person => {
    person.course = 'Introdução ao Javascript'
    return person
});
console.log('Pessoass com a adição do course: ', personsWithCourse);

// transformar um array em = outro tipo
const totalAge = persons.reduce((age, person)=> {
    age += person.age
    return age
}, 0)

console.log('Soma de idade das pessoas', totalAge);


const totalAgeMeans = persons
    .filter( person => person.age >= 18 && person.gender === gender.MAN)
    .reduce((age, person) =>{ 
        age += person.age
        return age
    }, 0)

console.log('Total age means: ', totalAgeMeans);