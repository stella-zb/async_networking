// take a URL as a command-line argument as well as a local file path and download the resource to the specified path.
/*
Extra considerations:
  X | Use the request library to make the HTTP request
  X | Use Node's fs module to write the file
  ? | Use the callback based approach we've been learning so far
  X | Do not use the pipe function
  ? | Do not use synchronous functions (see warning below)
*/
const fs = require('fs');
const request = require('request');
const cliArgs = process.argv.slice(2);

request(cliArgs[0], (error, response, body) => {
  if (error){
    throw error
  }
  if (response.statusCode !== 200) {
    console.log(`expected 200 got ${response.statusCode} terminate application`);
    return;
  }
  if (body !== undefined) {
    fs.writeFile(cliArgs[1], body, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  } else {
    console.log('No body No file, sorry try again');
  } 
});


