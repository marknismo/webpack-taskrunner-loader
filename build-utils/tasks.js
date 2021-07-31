const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function runCommand() {
  const { stdout, stderr } = await exec(
    // "docker exec bind bash -c 'rndc reload'"
    "whoami" //specify the command to run
  );
  console.log("stdout:", stdout);
  console.error("stderr:", stderr);
}

module.exports = runCommand;
