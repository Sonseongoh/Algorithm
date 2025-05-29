const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let answer=-Infinity;

for(let i=0; i<=n-k; i++){
    let maxVal=0
    for(let j=i; j<i+k; j++){
        maxVal+=arr[j]
    }
    if(maxVal>answer) answer=maxVal
}

console.log(answer)