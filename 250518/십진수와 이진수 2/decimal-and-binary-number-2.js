const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 
let answer=0

for(let i=0; i<binaryInput.length; i++){
    answer=answer*2+Number(binaryInput[i])
}

console.log((answer*17).toString(2))