var fs = require('fs');

fs.readFile('./content.md', (err, content) => {
  if (err) throw err;
  console.log(content.toString());
});

var data = fs.readFileSync('./content.md');
console.log(data.toString());

var buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());
