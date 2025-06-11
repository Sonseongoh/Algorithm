const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

// Please Write your code here.

let answer=0
let temp=[]

function dfs(num){
    if(num===n){
        let ok= true
        for(let i=2; i<n; i++){
            if(temp[i]===temp[i-1]&& temp[i]===temp[i-2]){
                ok=false
                break;
            }
        }
        if(ok){
        answer++
        return;
        }
    }

    for(let i=1; i<=k; i++){
        temp.push(i)
        dfs(num+1)
        temp.pop()
    }
}

dfs(0)

console.log(answer)