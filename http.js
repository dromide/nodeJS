const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write('Hello there user');
    // res.end();

    if (req.url === '/') {

        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write('<h1>Welcome to the homepage</h1>');
        // res.write('<h1>Welcome to the homepage</h1>');
        // res.write('<p>Additionalcontent</p>');
        // res.end();
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    }
    if (req.url === '/user') {
        res.write('Welcome user jhonson');
        res.end();
    }
});

server.listen(3000, () => console.log('Server is up and running'));