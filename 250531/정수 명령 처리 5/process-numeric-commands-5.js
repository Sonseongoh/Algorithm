const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

const arr = [];
const result = [];

for (let i = 0; i < n; i++) {
    const cmd = commands[i];

    if (cmd.startsWith("push_back")) {
        const value = Number(cmd.split(" ")[1]);
        arr.push(value);
    } else if (cmd === "pop_back") {
        arr.pop();
    } else if (cmd === "size") {
        result.push(arr.length);
    } else if (cmd.startsWith("get")) {
        const index = Number(cmd.split(" ")[1]) - 1; 
        result.push(arr[index]);
    }
}

console.log(result.join("\n"));