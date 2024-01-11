const WebSocket = require('ws');
const express = require('express');
const bodyParser = require('body-parser');
const message = require("./src/routes/message");
const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use("api/v1",message);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('error', function error(err) {
    console.error('WebSocket Error:', err);
  });

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('Pankaj Tete');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
