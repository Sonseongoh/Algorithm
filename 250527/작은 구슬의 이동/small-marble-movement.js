const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.

let newr=r-1
let newc=c-1

let dx=[-1,1,0,0]
let dy=[0,0,1,-1]

let dir={
    'U':0,
    'D':1,
    'R':2,
    'L':3
}

let dirIdx=dir[d]

for(let i=0; i<t; i++){
    let nx=newr+dx[dirIdx]
    let ny=newc+dy[dirIdx]
    if(nx<0||nx>=n||ny<0||ny>=n){
        if(dirIdx===0){
            dirIdx=1
        }else if (dirIdx === 1) {
            dirIdx = 0;
        }else if (dirIdx === 2) {
            dirIdx = 3;
        }else if (dirIdx === 3) {
            dirIdx = 2;
        }
    }else{
        newr=nx
        newc=ny
    }
}

console.log(newr+1,newc+1)