const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let max=0
let count=1
for(let i=0; i<n; i++){
    if(arr[i]===arr[i+1]){
        count++
        max=count
    }else{
        count=1
    }
}

console.log(max)