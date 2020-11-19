See below for some setup for the web security part 1 and 2 workshop code.

## Web Security Part 1 code:

Things to download:
- Node.js 12.x

To run the code:
- Open two terminals on your machine
- Type ```node my-server.js``` to run the server in one terminal
- Type ```node my-client.js 8000``` to run the client in the other terminal

It should be a basic TCP client and server, where the client is able to poke the server and get some data returned to it.

## Web Security Part 2 code:

Things to download:
- Node.js 12.x
- curl (completely optional)

To run the code:
- time-server.js: type ```node time-server.js 8000``` to run the server on port 8000 in one terminal, and type ```node my-client.js 8000``` to use the client from part 1 and make a request to the server.
- http-server.js: type ```node http-server.js 8000``` to run the server on port 8000. Then, you can either use curl, or open your web browser and navigate to http://localhost:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z or http://localhost:8000/api/unixtime?iso=2013-08-10T12:10:15.474Z to test your two URL endpoints.
- http-form-server.js: type ```node http-post-server.js 8000``` to run the server on port 8000. Then, you can either go to http://localhost:8000 from your browser and submit the form to see text output or use curl to make the POST request.
