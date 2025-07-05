const event = require('events');
const emitter = new event.EventEmitter();

// emitter.on('event', (name) => {
//     console.log(name);
// })

emitter.on('event', (name,age) => {
    console.log(name);
    console.log(age);
})

emitter.emit('event','mike',27)