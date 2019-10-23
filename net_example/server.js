const net = require('net');

const server = net.createServer();

server.listen(3001, () => {
  console.log('Server listening on port 3001!');
});

server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');
});