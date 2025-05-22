const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

let count=1
let max=1

// Please Write your code here.
for(let i=0; i<n; i++){
    if(arr[i]*arr[i+1]>0){
        count+=1
        if(count>=max) max=count
    }else{
        count=1
    }
}

console.log(max)