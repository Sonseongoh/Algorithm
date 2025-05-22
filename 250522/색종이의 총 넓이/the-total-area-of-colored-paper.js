const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let arr=Array.from({length:201},()=>new Array(201).fill(0))
let OFFSET=100

for(let i=0; i<n; i++){
    let [x,y]=rects[i]
    let ox=x+OFFSET
    let oy=y+OFFSET

    for(let x=ox; x<ox+8; x++){
        for(let y=oy; y<oy+8; y++){
            arr[x][y]=1
        }
    }
}

let count=0

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[i][j]===1) count++
    }
}
console.log(count)