module.exports = function (cmd) {
  if (cmd === "pwd") {
    process.stdout.write(__filename);
    //process.stdout.write("\nprompt > ");
  }
};
