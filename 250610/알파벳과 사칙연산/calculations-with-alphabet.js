const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

// Please Write your code here.
const vars = [];

for(let i=0; i<expression.length; i++){
    if(i%2===0) vars.push(expression[i])
}

let setVars=[...new Set(vars)]


let temp=[]
let answer=-Infinity

function dfs(idx){
    if(idx===setVars.length){
        let res=temp[setVars.indexOf(expression[0])]
        for(let i=2; i<expression.length; i++){
            const idx=setVars.indexOf(expression[i])
            const x=temp[idx]
            if(expression[i - 1] === '+'){
                res += x;
            }else if(expression[i - 1] === '-'){
                res -= x;
            }else if(expression[i - 1] === '*'){
                res *= x;
            }
        }
        answer = Math.max(answer, res);
        return;
    }


    for(let i=1; i<=4; i++){
        temp.push(i)
        dfs(idx+1)
        temp.pop()
    }
}


dfs(0)


console.log(answer);