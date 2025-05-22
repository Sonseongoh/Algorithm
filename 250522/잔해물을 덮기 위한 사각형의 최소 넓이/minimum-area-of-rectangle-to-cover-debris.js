const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.

let arr =Array.from({length:2001},()=>new Array(2001).fill(0))
let OFFSET=1000
let answer=0
let hasone=false


let[x1,y1,x2,y2]=rect1.map(el=>el+OFFSET)

for(let x=x1; x<x2; x++){
    for(let y=y1; y<y2; y++){
        arr[x][y]=1
    }
}

let[x3,y3,x4,y4]=rect2.map(el=>el+OFFSET)

for(let x=x3; x<x4; x++){
    for(let y=y3; y<y4; y++){
        arr[x][y]=0
    }
}

let minX = 2001, maxX = -1, minY = 2001, maxY = -1;

for(let x=0; x<arr.length; x++){
    for(let y=0; y<arr.length; y++){
        if(arr[x][y]===1){
            hasone=true
            minX=Math.min(minX,x)
            maxX=Math.max(maxX,x)
            minY=Math.min(minY,y)
            maxY=Math.max(maxY,y)
        }
    }
}

if(!hasone){
    console.log(0)
    return
}
answer=(maxX-minX+1)*(maxY-minY+1)


console.log(answer)