const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
let answer =0
let array=new Array(n+1).fill(0)


//k번의 횟수동안 
for(let i=0; i<k; i++){
    const[a,b]=segments[i]
    array[a]+=1
    array[b+1]-=1
}

for(let i=1; i<=n; i++){
    array[i]+=array[i-1]
}


console.log(Math.max(...array));