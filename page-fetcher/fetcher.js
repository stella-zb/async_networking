// take a URL as a command-line argument as well as a local file path and download the resource to the specified path.
const request = require('request');
const cliArgs = function () {
  return process.argv.slice(2);

};

request('cliArgs', (error, response, body) => {
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});