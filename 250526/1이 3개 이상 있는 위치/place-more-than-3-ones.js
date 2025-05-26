const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let dx=[-1,1,0,0]
let dy=[0,0,-1,1]

let count=0

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        let oneCount=0
        for(let dir=0; dir<4; dir++){
            let xdir=i+dx[dir]
            let ydir=j+dy[dir]
            if(xdir>=0&&xdir<n&&ydir>=0&&ydir<n){
                if(grid[xdir][ydir]===1)oneCount+=1
            }
        }
        if(oneCount>=3){
            count+=1
        }
    }
}

console.log(count)