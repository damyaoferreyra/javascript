let user = {
    name: 'Damião',
}

console.log(user.name)

console.log(user['name'])

const prop = 'name'
console.log(user[prop])

user.lastName = 'Ferreira'

console.log(user);

console.log('delete prop name');
delete user.name
console.log(user);