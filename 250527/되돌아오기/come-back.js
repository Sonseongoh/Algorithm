const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
// Please Write your code here.

let answer=-1

let dir={
    'W':2,
    'S':1,
    'E':0,
    'N':3
}

let dx=[0,1,0,-1]
let dy=[1,0,-1,0]

let x=0
let y=0
let time=0



for(let i=0; i<n; i++){
    let [d,n]=moves[i].split(' ')
    let direction=dir[d]
    for(let j=0; j<Number(n); j++){
        x+=dx[direction]
        y+=dy[direction]
        time++
        if(x===0&&y===0){
        console.log(time)
        return
        }
    }
    
    
}

console.log(answer)