const request = require('request');
request('http://lighthouselabs.ca/booger', (error, response, body) => {
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});