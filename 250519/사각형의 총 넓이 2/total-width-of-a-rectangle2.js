const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let answer=0
const OFFSET=100
let array=Array.from({length:202},()=>new Array(202).fill(0))


for(let i=0; i<n; i++){
    const[x1,y1,x2,y2]=rects[i]
    for(let x=x1; x<x2; x++){
        for(let y=y1; y<y2;y++){
            array[x+OFFSET][y+OFFSET]=1
        }
    }
}

for(let i=0; i<202; i++){
    for(let j=0; j<202; j++){
        if(array[i][j]===1){
            answer++
        }
    }
}

console.log(answer)