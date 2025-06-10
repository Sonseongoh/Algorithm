const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const expression = input[0];

// Please Write your code here.
const vars = [];
for (const ch of expression) {
  if (ch >= 'a' && ch <= 'f' && !vars.includes(ch)) {
    vars.push(ch);
  }
}

let answer = -Infinity;
const assign = {};

// vars 배열을 돌아가며 1~4 값을 할당하는 백트래킹
function dfs(idx) {
  if (idx === vars.length) {
    // 모든 변수에 값 할당 완료 → 식을 왼쪽에서 오른쪽으로 차례대로 계산
    let res = assign[expression[0]];
    for (let i = 1; i < expression.length; i += 2) {
      const op = expression[i];
      const v  = assign[expression[i+1]];
      if (op === '+')      res += v;
      else if (op === '-') res -= v;
      else /* '*' */       res *= v;
    }
    answer = Math.max(answer, res);
    return;
  }

  const v = vars[idx];
  for (let val = 1; val <= 4; val++) {
    assign[v] = val;
    dfs(idx + 1);
  }
}

dfs(0);
console.log(answer);