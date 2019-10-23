const net = require('net');

const server = net.createServer();

server.listen(3006, () => {
  console.log('Server listening on port 3006!');
});