const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.


let maxNum=-Infinity
let answer=0
for(let i=0; i<a.length; i++){
    let arr=a.split('')
    let nx=0
    if(a[i]==='1'){
        nx='0'
    }else nx='1'


    arr[i]=nx
    let changedNum=arr.join('')
    let realNum=parseInt(changedNum,2)

    if(realNum>maxNum) maxNum=realNum
    answer=maxNum
}
console.log(answer)
