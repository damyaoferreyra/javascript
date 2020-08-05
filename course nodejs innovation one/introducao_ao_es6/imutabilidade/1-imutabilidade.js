// as variáveis e objetos não podem ser atualizados
// sempre que necessário atualização
// criar uma nova referência e copiar os dados
// e em seguida alterar o desejado

const user = {
    name: "Damião",
    lastName: "Ferreira"
}

function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user)
console.log(userWithFullName)