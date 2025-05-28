const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let minSum=Infinity

for(let i=0; i<n; i++){
    let total=0
    for(let j=0; j<n; j++){
       total += Math.abs(i-j)*arr[j]
    }
    if(total<minSum) minSum=total
}

console.log(minSum)