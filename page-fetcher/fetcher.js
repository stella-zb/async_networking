// take a URL as a command-line argument as well as a local file path and download the resource to the specified path.

const cliArgs = function () {
  return process.argv.slice(2);
};
console.log(cliArgs());