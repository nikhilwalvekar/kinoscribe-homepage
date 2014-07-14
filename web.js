// web.js
var express = require("express");
var cors = require('cors');
var logfmt = require("logfmt");
var app = express();

app.use(cors);
app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/public'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
