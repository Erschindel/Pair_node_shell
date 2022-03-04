const fs = require("fs");

function catFunc(cmd) {
  let first, second;
  if (cmd.split(" ").length > 1) {
    first = cmd.split(" ")[0];
    second = cmd.split(" ")[1];
  }
  if (second && first === "cat") {
    //if(second.includes("."))
    fs.readFile(second, "utf8", function (error, data) {
      if (error) {
        throw error;
      } else {
        process.stdout.write(data);
      }
    });
    //process.stdout.write("\nprompt > ");
  }
}
module.exports = catFunc;
