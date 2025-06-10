const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
segments.sort((a, b) => a[1] - b[1]);

let count=0
let last=0

for(let [x,y] of segments){
    if(x>last){
        count++
        last=y
    }
}

console.log(count);