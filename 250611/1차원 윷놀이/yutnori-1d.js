const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.

let answer=0;
let pos = Array(k).fill(1)

function calc(){
    let score=0;
    for(let x of pos){
        score+=x>=m?1:0
    }
    return score
}

function dfs(num){
    answer=Math.max(answer,calc())

    if(num===n){
        return
    }

    for(let i=0; i<k; i++){
       if(pos[i]>=m){
        continue
       }
       pos[i]+=nums[num];
       dfs(num+1)
       pos[i]-=nums[num]
    }
}

dfs(0)
console.log(answer)