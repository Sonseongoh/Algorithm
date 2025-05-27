const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

let MAP=Array.from({length:n},()=>new Array(m).fill(0))

let dx=[0,1,0,-1]
let dy=[1,0,-1,0]

let dirNum=0

let x=0
let y=0
//초기 위치
MAP[x][y]=1
for(let i=2; i<=n*m; i++){
    let nx=x+dx[dirNum]
    let ny=y+dy[dirNum]
    if(nx<0||nx>=n||ny<0||ny>=m||MAP[nx][ny]!==0){
        dirNum=(dirNum+1)%4
    }
    x+=dx[dirNum]
    y+=dy[dirNum]
    MAP[x][y]=i
}

MAP.forEach(el=>console.log(el.join(' ')))






