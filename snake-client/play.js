const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({ 
    host: '192.168.99.149',
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // Verify we connected
  conn.on('connect', () => {
    console.log(`I'm In.`)
})

  // Receive messages from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // Not sure what this does!
  return conn;
}

  // Verifies our stript is running
console.log('Connecting ...');

  // Goes and tries to connect
connect();

/*
Update the connect function to also attach an event handler to handle incoming data and console log it for the player.
*/

