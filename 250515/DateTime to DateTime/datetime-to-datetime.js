const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.


let start=(11*24*60)+(11*60)+11

let end=A*24*60+B*60+C

if(end-start<0){
    answer=-1
}else{
    answer=end-start
}



console.log(answer)