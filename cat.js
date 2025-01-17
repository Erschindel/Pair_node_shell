const fs = require("fs");

function catFunc(cmd) {
  let first, second;
  if (cmd.split(" ").length > 1) {
    first = cmd.split(" ")[0];
    second = cmd.split(" ")[1];
  }
  if (second && first === "cat") {
    fs.readFile(second, "utf8", function (error, data) {
      if (error) {
        throw error;
      } else {
        process.stdout.write(data);
      }
    });
  }
}
module.exports = catFunc;
