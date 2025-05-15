const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let totaldays=0

if(m1=m2){
    totaldays=d2-d1
}else{
    totaldays+=daysInMonth[m1]-d1
    for(let i=m1+1; i<m2; i++){
        totaldays+=daysInMonth[i]
    }
    totaldays+=d2
}

let dayIndex= (0+totaldays)%7

console.log(week[dayIndex])