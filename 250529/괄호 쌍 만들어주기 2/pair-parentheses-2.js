const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.

let count=0
for(let i=0; i<A.length; i++){
    for(let j=i+1; j<A.length-1; j++){
        if(A[i]==='(' && A[i+1]==='('){
            if(A[j]===')'&&A[j+1]===')'){
                count++
            }
        }
    }
}

console.log(count)