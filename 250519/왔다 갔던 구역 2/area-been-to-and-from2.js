const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

let OFFSET=1000
let array=new Array(2004).fill(0)

let flag=0

for(let i=0; i<n; i++){
    const [a,b]=commands[i].split(' ')
    const aNum=Number(a)
    if(b==='R'){
        for(let j=flag; j<flag+aNum; j++){
            array[j+OFFSET]+=1
        }
        flag+=aNum
    }else{
        for(let k=flag-1; k>=flag-aNum; k--){
            array[k+OFFSET]+=1
        }
        flag-=aNum
    }
    
}
let answer=array.filter(v=>v>=2).length
console.log(answer)