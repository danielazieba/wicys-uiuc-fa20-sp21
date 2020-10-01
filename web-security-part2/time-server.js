const net = require('net')

function pad_zero (date_value) {
    return date_value < 10 ? "0" + date_value : date_value;
}

const server = net.createServer(function (socket) {
    var curr_date = new Date();
    var date_output = curr_date.getFullYear() + "-"
        + pad_zero(curr_date.getMonth() + 1) + "-"
        + pad_zero(curr_date.getDate()) + " "
        + pad_zero(curr_date.getHours()) + ":"
        + pad_zero(curr_date.getMinutes()) + "\n";

    socket.end(date_output);
});

server.listen(process.argv[2])