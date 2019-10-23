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
  if (data === `w`) { console.log("Move: up"); }
  if (data === `a`) { console.log("Move: left"); }
  if (data === `s`) { console.log("Move: down"); }
  if (data === `d`) { console.log("Move: right"); }
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
