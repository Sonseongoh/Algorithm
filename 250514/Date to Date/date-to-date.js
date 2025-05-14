const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let answer=0

if(m2===m1){
    answer=d2-d1+1
}else{
    answer+=daysInMonth[m1]-d1+1
    for(let i=m1+1; i<m2; i++){
        answer+=daysInMonth[i]
    }
    answer+=d2
}

console.log(answer)