const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
// Please Write your code here.

const baseDate = new Date(2011, m1 - 1, d1);


const targetDate = new Date(2011, m2 - 1, d2);


const diffDays = Math.round((targetDate - baseDate) / (1000 * 60 * 60 * 24));


const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let dayIndex = (0 + diffDays) % 7;
if (dayIndex < 0) dayIndex += 7;

console.log(week[dayIndex]);