const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("5sn Node calisiyor 🚀");
});

server.listen(process.env.PORT);
