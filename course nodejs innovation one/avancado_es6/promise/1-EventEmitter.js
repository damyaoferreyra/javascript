// Exclusivo do node

const EventEmitter = require('events')


// 1
const emitter = new EventEmitter()

// Ovverid no evento (params)
emitter.on('User logged', data =>{
    console.log("Ovverid evento (User logged)",data);
})
// nome do evento e dados
emitter.emit('User logged', {user: 'Damião Ferreira'})

// 2
class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged', data)
    }
}

const users = new Users()
// Ovverid no evento (params)
users.on('User logged', data =>{
    console.log("Ovverid evento (User logged)",data);
})

users.userLogged({user: 'Damião Ferreira'})

// Para consumir apenas uma vez : função será usada apenas 1 vez
users.once('User logged', data =>{
    console.log("Ovverid evento (User logged)",data);
})