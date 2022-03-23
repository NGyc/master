const yargs = require('yargs');

const childProcess = require('child_process');

const { _: message } = yargs.argv;

if (message) {
  childProcess.execSync('git  pull');
  childProcess.execSync('git add .');
  childProcess.execSync(`git commit -m '${message}'`);
  childProcess.execSync('git push -u origin master');
}
