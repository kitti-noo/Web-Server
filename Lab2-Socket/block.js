// fs = require("fs"); //Blocking I/O
// data = fs.readFileSync('text.txt');
// console.log(data.toString());
// console.log("Finished");

fs = require("fs"); //Non-Blocking I/O
fs.readFile('text.txt',  (err, data) => {
   if (err)
       return console.error(err);
   console.log(data.toString());
});
console.log("Finished");