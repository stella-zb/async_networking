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

  // Receive messages from the server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

    // Verify we connected
    conn.on('connect', () => {
      console.log(`I'm In.`)
      conn.write("Name: S&T");
    })

    // movement function
    // conn.on('connect', () => {
    //   console.log(`Move Up`)
    //   conn.write("Move: up");
    // })
    // conn.on('connect', () => {
    //   console.log(`Move Left`)
    //   conn.write("Move: left");
    // })
    // conn.on('connect', () => {
    //   console.log(`Move Up`)
    //   conn.write("Move: up");
    // })
    // conn.on('connect', () => {
    //   console.log(`Move Left`)
    //   conn.write("Move: left");
    // })
    // conn.on('connect', () => {
    //   console.log(`Move Down`)
    //   conn.write("Move: down");
    // })
    // conn.on('connect', () => {
    //   console.log(`Move Right`)
    //   conn.write("Move: right");
    // })
  // Not sure what this does!
  return conn;
}

module.exports = connect;
// export the function
