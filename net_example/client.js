const net = require('net')

const conn = net.createConnection({
  host: '192.168.88.13',
  port: 3001
});

conn.setEncoding('utf8');

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write(`I'm in.`);
});