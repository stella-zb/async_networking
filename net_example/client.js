const net = require('net'); 

const conn = net.createConnection({
  host: '192.168.88.215',
  port: 3013
});

conn.setEncoding('utf8');