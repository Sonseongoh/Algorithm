const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

segments.sort((a, b) => a[1] - b[1]);

let count = 0;
let lastEnd = 0;

for (const [l, r] of segments) {
  // 끝점을 공유하면 겹침 -> l > lastEnd 여야 선택
  if (l > lastEnd) {
    count++;
    lastEnd = r;
  }
}

console.log(count);