const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

// Please Write your code here.

let temp=[]

function dfs(num){
    if(num===n){
        console.log(temp.join(' '))
      return
    }

    for(let i=1; i<=k; i++){

        let len=temp.length;
        if(len>=2 && temp[len-1]===i&& temp[len-2]===i) continue

        temp.push(i)
        dfs(num+1)
        temp.pop()
    }
}

dfs(0)

