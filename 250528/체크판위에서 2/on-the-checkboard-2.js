const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.

let count = 0;

for(let i=0; i<R; i++){
    for(let j=0; j<C; j++){
        for(let k=i+1; k<R-1; k++){
            for(let l=j+1; l<C-1; l++){
                  if (
                    grid[0][0] !== grid[i][j] &&
                    grid[i][j] !== grid[k][l] &&
                    grid[k][l] !== grid[R - 1][C - 1]
                    ){
                        count++
                    }
            }
        }
    }
}

console.log(count)