const net = require('net')

const conn = net.createConnection({
  host: '192.168.88.13',
  port: 3000
});

conn.setEncoding('utf8');