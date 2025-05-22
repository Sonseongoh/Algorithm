const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.
const OFFSET=1000
let array=Array.from({length:2002},()=>new Array(2002).fill(0))

function draw(rec,num){
    let [x1,y1,x2,y2]=rec.map(dot=>dot+OFFSET)
    for(let y=y1; y<y2; y++){
        for(let x=x1; x<x2; x++){
            array[y][x]=num
        }
    }
}

draw(rectA,1)
draw(rectB,1)
draw(rectM,0)

let count=0
for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
        if(array[i][j]===1) count++
    }
}


console.log(count)