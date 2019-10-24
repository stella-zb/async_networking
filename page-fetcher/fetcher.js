// take a URL as a command-line argument as well as a local file path and download the resource to the specified path.
/*
Extra considerations:
  Use the request library to make the HTTP request
  Use Node's fs module to write the file
  Use the callback based approach we've been learning so far
  Do not use the pipe function
  Do not use synchronous functions (see warning below)
*/

const request = require('request');
const cliArgs = process.argv.slice(2);

request(cliArgs[0], (error, response, body) => {
  console.log('body:', body);
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
});