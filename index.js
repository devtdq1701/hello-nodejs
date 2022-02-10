var express = require('express');
var app = express();
app.get('/about', function (req, res) {
  res.send('Hello 123');
});
app.get('/contact', function (req, res) {
  res.send('<h1>1234567890 this is from Hanoi</h1>');
});
app.get('/', function (req, res) {
  res.send('<h1>Hura Haru Yahoo Google.com</h1>');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
