const { run } = require('./01-intro')
const os = require('os')
/* const name = os.userInfo() */
/* console.log(name) */
/* console.log(`The uptime is ${os.uptime()/3600} hours`) */
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem : os.totalmem(),
    freemem: os.freemem()
}

/* console.log() */
run(currentOS)