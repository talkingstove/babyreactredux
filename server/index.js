const express = require('express');
const app = express();
var cors = require('cors');
var path = require('path');

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});