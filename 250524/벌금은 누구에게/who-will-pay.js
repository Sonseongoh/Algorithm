const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.
let answer=0

let count=new Array(n+1).fill(0)

for(let x of penalizedPersons){
    count[x]+=1
    if(count[x]===k){
        answer=x
        console.log(answer)
        return
    }
}

console.log(-1)


