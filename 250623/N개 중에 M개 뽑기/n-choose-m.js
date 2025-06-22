const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

let answer=[]
let temp=[]

function dfs(start,depth){
    if(depth===m){
        answer.push(temp.join(' '))
        return
    }

    for(let i=start; i<=n; i++){
        temp.push(i)
        dfs(i+1,depth+1)
        temp.pop()
    }

}

dfs(1,0)

answer.forEach(e=>console.log(e))
