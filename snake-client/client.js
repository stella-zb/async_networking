const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // Verify we connected
  conn.on('connect', () => {
    console.log(`I'm In.`)
    conn.write("Name: S&T");
  })

  // Receive messages from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });


  // Not sure what this does!
  return conn;
}

module.exports = connect;
// export the function
