let connection;

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

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

module.exports = setupInput;


/*

Update the setupInput function within input module to accept a conn parameter and set it as the value for the connection variable.

let connection;

const setupInput = function(conn) {
  connection = conn;
}
Update play.js to send the connection object returned from connect() into our setupInput() function.

Our input module can now use the connection variable to send movement commands/messages to the server.

Run the code again to ensure that it is valid and runnable, as before.
*/