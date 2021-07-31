const runCommand = require("./tasks");

function taskrun(source) {
  console.log("yay taskrun-loader is runnning");
  runCommand();
  return "ok";
}

module.exports = taskrun;
