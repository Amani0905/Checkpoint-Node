const fs = require('fs')
const contents = fs.readFileSync(process.argv[2])
const str = contents.toString()
const array = str.split('\n')
console.log(array.length-1)