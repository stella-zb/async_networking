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

  return conn;
}

console.log('Connecting ...');
connect();

/*
Update the connect function to also attach an event handler to handle incoming data and console log it for the player.
*/