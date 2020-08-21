debugger; // adiciona um breakpoint

console.log('black text')
console.warn('Yellow text with alert')
console.error('Red error text')

console.trace('prints error details')

console.group('My group')
console.log('details')
console.log('details')
console.groupEnd('finished group');

console.time('Log time')
setTimeout(()=>{
    console.timeEnd('Log time')
}, 2000)


console.table(['Damião Ferreira', 'SONDA Corporation'])

console.log('%c style log', 'color: blue')

console.assert(1 === 1, '1 === 1 : ok')