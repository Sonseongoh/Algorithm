const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];
// Please write your code here.

let stack=[]

for(let i=0; i<bracketStr.length; i++){
    if(bracketStr[i]==='('){
        stack.push(bracketStr[i])
    }else if(stack.length>0&&bracketStr[i]===')'){
        stack.pop()
    }
}

if(stack.length===0) console.log('Yes')
else console.log('No')