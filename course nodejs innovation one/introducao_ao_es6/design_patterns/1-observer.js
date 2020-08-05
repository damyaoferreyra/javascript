class Observables{
    constructor(){
        this.observables = []
    }

    subscribe(fn){
        this.observables.push(fn)
    }

    notify(data){
        this.observables.forEach(fn => fn(data))
    }

    unsubscribe(fn){
        this.observables = this.observables.filter( obs => obs !== fn)
    }
}

const o = new Observables();

const logData1 = data => console.log(`Subscribe 1: ${data}`)
const logData2 = data => console.log(`Subscribe 2: ${data}`)
const logData3 = data => console.log(`Subscribe 3: ${data}`)
const logData4 = data => console.log(`Subscribe 4: ${data}`)

o.subscribe(logData1)
o.subscribe(logData2)
o.subscribe(logData3)
o.subscribe(logData4)

o.notify('Notified 1')
o.unsubscribe(logData2)
console.log('Removed logData2')
o.notify('Notified 3')