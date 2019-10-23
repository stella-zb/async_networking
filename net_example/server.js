const net = require('net');

const server = net.createServer();

server.listen(3013, () => {
  console.log('Server listening on port 3000!');
});