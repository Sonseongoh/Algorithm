const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.

function traceMove(moves){
    let position=[]
    let pos=0
    for(let i=0; i<moves.length; i++){
        let[dir,num]=moves[i]
        for(let j=0; j<num; j++){
            if(dir==='R'){
            pos+=1
            }else{
            pos-=1
            }
        position.push(pos)
        }
    }
    return position
}


let APath=traceMove(movesA)
let BPath=traceMove(movesB)

let maxTime=Math.max(APath.length,BPath.length)

for(let t=0; t<maxTime; t++){
    posA=APath[t]??at(-1)
    posB=BPath[t]??at(-1)

    if(posA===posB){
        
        console.log(t+1)
    } 
        
}

console.log(APath)