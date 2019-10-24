// dependency on client.js
const connect = require('./client');
const setupInput = require('./input');
// Verifies our stript is running
console.log('Connecting ...');

  // Function Calls
  // Goes and tries to connect
// initiallizes user inputs
setupInput(connect());
