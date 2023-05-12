const express = require('express');
const app = express();
const http = require('http');
const port = 3001;

app.get('/order', (req, res) => {
  // Make a request to Node 3
  const options = {
    hostname: 'localhost',
    port: 3002,
    path: '/product',
    method: 'GET'
  };
  const req2 = http.request(options, response => {
    let data = '';
    response.on('data', chunk => {
      data += chunk;
    });
    response.on('end', () => {
      console.log(data);
      res.send('Hello from Node 2!');
    });
  });
  req2.on('error', error => {
    console.error(error);
    res.status(500).send('Error');
  });
  req2.end();
});

app.listen(port, () => {
  console.log(`Node 2 listening on port ${port}!`);
});

