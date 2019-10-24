const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = (constants) => {
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // Receive messages from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

    // Verify we connected
    conn.on('connect', () => {
      console.log(`I'm In.`)
      conn.write(`Name: ${constants.NAME}`);
    })

  return conn;
}

module.exports = connect;
// export the function
