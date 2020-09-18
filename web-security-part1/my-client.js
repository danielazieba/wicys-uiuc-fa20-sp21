var net = require('net');

var client = new net.Socket();
client.connect(process.argv[2], '127.0.0.1', function() {
	console.log('Connected to server at port ' + process.argv[2]);
	client.write('Hello server!');
});

client.on('data', function(data) {
	console.log('Data received from the server: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});