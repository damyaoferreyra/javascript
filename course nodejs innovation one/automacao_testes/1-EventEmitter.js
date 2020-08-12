
const EventEmitter = require('events')

// 1
const emitter = new EventEmitter()

// Ovverid no evento (params)
emitter.on('User logged', data =>{
    console.log("Ovverid evento (User logged)",data);
})
// nome do evento e dados
emitter.emit('User logged', {user: 'Damião Ferreira'})