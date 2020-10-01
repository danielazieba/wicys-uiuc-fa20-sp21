const http = require('http');
var url = require('url');

const server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        // handle POST request here
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            var url_parts = url.parse("/?" + body, true);
            res.end('<p>Received a POST request with the text input: ' + url_parts.query.test_text + '</p>');
        });
    } else {
        res.end(`
            <!doctype html>
            <html>
                <body>
                    <form action="/" method="post">
                        <input type="text" name="test_text"/> <br/>
                        <button> Submit form </button>
                    </form>
                </body>
            </html>
        `);
    }
});

server.listen(process.argv[2]);