const express = require('express');
const app = express();
const http = require('http');
const port = 3002;

app.get('/product', (req, res) => {
  res.send('Hello from Node 3!');
});

app.listen(port, () => {
  console.log(`Node 3 listening on port ${port}!`);
});

