const express = require('express');
const app = express();
const http = require('http');
const port = 3000;

app.get('/index', (req, res) => {
  // Make a request to Node 2
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/order',
    method: 'GET'
  };
  const req1 = http.request(options, response => {
    let data = '';
    response.on('data', chunk => {
      data += chunk;
    });
    response.on('end', () => {
      console.log(data);
      res.send('Hello from Node 1!');
    });
  });
  req1.on('error', error => {
    console.error(error);
    res.status(500).send('Error');
  });
  req1.end();
});

app.listen(port, () => {
  console.log(`Node 1 listening on port ${port}!`);
});

