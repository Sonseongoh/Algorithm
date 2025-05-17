const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.




let number=binaryStr.toString().split('')
let answer=0
for(let i=0; i<number.length; i++){
    answer=answer*2+Number(number[i])
}

console.log(answer)

