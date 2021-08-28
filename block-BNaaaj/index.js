var os = require('os');
var fs = require('fs');

console.log(os.freemem());
console.log(os.cpus());
console.log(os.version);

fs.readFile('./content.md', (err, content) => {
  if (err) throw err;
  console.log(content);
});

const buff1 = Buffer.alloc(12);
buff1.write('hello altcampus');
console.log(buff1.toString());

//blocking

// Reads a file in a synchronous and blocking way
const data = fs.readFileSync('./content.md', { encoding: 'utf8' });
console.log(data);
let add = 0;
for (let i = 1; i <= 10; i++) {
  add = add + i;
}

// Prints the sum
console.log('Sum: ', add);

//Non-blocking

// Reads a file in a asynchronous and non-blocking way
fs.readFile('./content.md', { encoding: 'utf8' }, (err, data) => {
  console.log(data);
});

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

// Prints the sum
console.log('Sum: ', sum);
