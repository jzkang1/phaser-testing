const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
  });

app.use(express.static(__dirname));

app.use(express.static(__dirname + "/assets"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

