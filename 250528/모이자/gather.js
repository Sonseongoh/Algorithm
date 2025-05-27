const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let minSum=Infinity

for(let i=0; i<n; i++){
    let cost=0
    for(let j=0; j<n; j++){
        let distance=Math.abs(i-j)
        let person=arr[j]
        let moveCost=distance*person
        cost+=moveCost
    }
    if(cost<minSum){
        minSum=cost
    }
}

console.log(minSum)