const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.

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
    let nx=r+dx[dirIdx]
    let ny=c+dy[dirIdx]
    if(nx<1||nx>n||ny<1||ny>n){
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
        r=nx
        c=ny
    }
}

console.log(r,c)