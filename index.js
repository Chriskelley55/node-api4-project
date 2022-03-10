const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.end('<h1>Howdy Yall</h1>')
});
server.listen(9000, () => {
    console.log('server is up and crankin— please deposit 1000 electrons to continue')
})