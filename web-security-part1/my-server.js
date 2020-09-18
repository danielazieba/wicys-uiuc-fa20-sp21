const net = require('net')

const server = net.createServer(function (socket) {
  console.log("A client has connected.");
  socket.end("Hello client!");
});

server.listen(8000)