const { writeFileSync } = require('fs')
for (let i=0; i<1000;i++){
    writeFileSync('./content/big.txt',`hello ${i}\n`,{flag: 'a'})
}