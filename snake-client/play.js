// dependency on client.js
const connect = require('./client');
// Verifies our stript is running
console.log('Connecting ...');
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (data) => {
  if (data === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}


// Function Calls
// Goes and tries to connect
connect();
// initiallizes user inputs
setupInput();
