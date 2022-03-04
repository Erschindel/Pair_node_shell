const pwd = require('./pwd.js')

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  pwd(cmd);
  process.stdout.write(cmd);
  process.stdout.write("\nprompt > ");
});
