const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  people.push([Number(x), c]);
}

// Please Write your code here.

let arrays=new Array(10001).fill(0)

for(let [num,str] of people){
    arrays[num]=str === 'G' ? 1 : 2;
}

let maxSum=-Infinity


for(let i=0; i<arrays.length-k; i++){
    let sum=0
    for(let j=i; j<=i+k; j++){
        sum+=arrays[j]
    }
    if(sum>maxSum){
        maxSum=sum
    }
}

console.log(maxSum)

