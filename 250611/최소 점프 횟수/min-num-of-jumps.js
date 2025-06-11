const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

// Please write your code here.

let answer=Infinity
let minJump=Array(n).fill(Infinity)

function dfs(num,count){
    if(num===n-1){
        answer=Math.min(answer,count)
        return;
    }

    for (let jump = 1; jump <= nums[num]; jump++) {
        const next = num + jump;
        if (next < n && count + 1 < minJump[next]) {
            minJump[next] = count + 1;  // 더 적은 점프로만 방문
            dfs(next, count + 1);
        }
    }

}

minJump[0] = 0;
dfs(0, 0);

console.log(answer === Infinity ? -1 : answer);