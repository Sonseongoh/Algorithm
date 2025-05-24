const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.

let aPos = [];
let bPos = [];

let curA = 0;
for (let [v, t] of aData) {
    for (let i = 0; i < t; i++) {
        curA += v;
        aPos.push(curA);
    }
}

let curB = 0;
for (let [v, t] of bData) {
    for (let i = 0; i < t; i++) {
        curB += v;
        bPos.push(curB);
    }
}

let changeCount = 0;
let prevLead = 0;
for (let i = 0; i < aPos.length; i++) {
    let a = aPos[i];
    let b = bPos[i];

    let curLead = 0;
    if (a > b) curLead = 1;
    else if (a < b) curLead = 2;

    if (curLead !== 0 && curLead !== prevLead) {
        changeCount++;
        prevLead = curLead;
    }
}

console.log(changeCount-1);