const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let maxNum=-Infinity

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
    if(Math.abs(i-j)<=1)continue;
    if(arr[i]+arr[j]>maxNum) maxNum= arr[i]+arr[j]
    }
}

console.log(maxNum)