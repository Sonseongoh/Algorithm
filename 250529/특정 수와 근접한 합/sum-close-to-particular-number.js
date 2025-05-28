const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let minNum=Infinity;
let totalNum=0

for(let i=0; i<arr.length; i++){
    totalNum+=arr[i]
}

for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        if(Math.abs(s-(totalNum-arr[i]-arr[j]))<minNum) minNum=Math.abs(s-(totalNum-arr[i]-arr[j]))
    }
}
console.log(minNum)