const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.

let dx=[-1,0,1,0]
let dy=[0,1,0,-1]

let count = -1
let dirNum=0

let x=0;
let y=0

for(let i=0; i<commands.length; i++){
    if(commands[i]==='R'){
        dirNum=(dirNum+1)%4
    }else if(commands[i]==='L'){
        dirNum=(dirNum+3)%4
    }else if(commands[i]==='F'){
        x+=dx[dirNum]
        y+=dy[dirNum]
    }
    if(i>0 && x===0 && y===0){
        console.log(i+1)
        return
    }

}

console.log(count)