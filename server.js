const express = require('express');

const app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
}); 