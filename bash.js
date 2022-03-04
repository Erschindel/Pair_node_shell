const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");
const curl = require("./curl.js");
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  pwd(cmd);
  if(cmd === 'ls'){
    ls(cmd);
  }
  cat(cmd);
  curl(cmd);
  
  setTimeout(function () {
    process.stdout.write("\nprompt > ");
  }, 10);
});

// function done(output){
  
//   setTimeout(function () {
//     process.stdout.write(`${output}\nprompt > `);
//   }, 10);
// }

// module.exports = done;