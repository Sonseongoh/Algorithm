const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.

let array=new Array(102).fill(0)

for(let i=0; i<n; i++){
    const [a,b]=segments[i]
    for(let j=a; j<=b; j++){
        array[j]+=1
    }
}

console.log(Math.max(...array))
