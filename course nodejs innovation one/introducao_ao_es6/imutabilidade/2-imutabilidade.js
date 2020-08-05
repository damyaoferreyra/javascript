const students = [
    {
        name: 'João',
        grade: 6
    },
    {
        name: 'Jennifer',
        grade: 7
    },
    {
        name: 'Paul',
        grade: 10
    },
];


function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos aprovados: ')
console.log(getApprovedStudents(students))

console.log('\nLista de alunos')
console.log(students)