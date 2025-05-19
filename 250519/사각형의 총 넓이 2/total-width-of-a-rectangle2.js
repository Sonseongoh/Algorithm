const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const OFFSET=100
let array=Array.from({length:202},()=>new Array(202).fill(0))


for(let i=0; i<n; i++){
    const[x1,y1,x2,y2]=rects[i]
    

}


console.log(array2)