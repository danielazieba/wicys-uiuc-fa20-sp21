const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    // handle connections here!
    var url_parts = url.parse(req.url, true); // parsing until URL
    var query = url_parts.query; // grab query user made

    if (url_parts.pathname === "/api/parsetime") {
        // set status, specify that we're sending over some JSON
        res.writeHead(200, { 'Content-Type' : 'application/json'});
        // create our JSON, play with Date functionality of JS
        var given_iso_time = new Date(query.iso);
        var parsed_time_json = {
            hour: given_iso_time.getHours(),
            minute: given_iso_time.getMinutes(), 
            second: given_iso_time.getSeconds()
        };

        res.end(JSON.stringify(parsed_time_json)); // need to convert JSON to string
    } else if (url_parts.pathname === "/api/unixtime") {
        res.writeHead(200, { 'Content-Type' : 'application/json' });

        var given_iso_time = new Date(query.iso);
        var unixtime_json = {
            unixtime: given_iso_time.getTime()
        };

        res.end(JSON.stringify(unixtime_json));
    } else {
        // handle any other URL here
    }
});

server.listen(process.argv[2])