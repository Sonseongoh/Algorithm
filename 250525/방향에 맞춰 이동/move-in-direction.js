const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.
let dir={
    'E':0,
    'S':1,
    'W':2,
    'N':3
}
let dx=[1,0,-1,0]
let dy=[0,-1,0,1]

let x=0
let y=0

for(let i=0; i<moves.length; i++){
    let[di,n]=moves[i].split(' ')
    const d=dir[di]
    x+=dx[d]*n
    y+=dy[d]*n
}

console.log(`${x} ${y}`)


// console.log(moves[1].split(' '))