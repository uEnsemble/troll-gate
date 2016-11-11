var coinflip = require('coinflip');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  if (coinflip()) {
    res.status(200).send('you may pass\n');
  } else {
    res.status(201).send('solve my riddle\n');
  }
});

var port = (process.env.VCAP_APP_PORT || 3000);

app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});
