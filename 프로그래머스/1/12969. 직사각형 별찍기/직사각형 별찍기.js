const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [n, m] = line.split(' ').map(Number);
  const row = '*'.repeat(n); 
  const rectangle = Array(m).fill(row).join('\n'); 
  console.log(rectangle);
  rl.close();
});