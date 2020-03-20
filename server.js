var express = require('express');
 // var PORT = 8080;
 var PORT = process.env.PORT;
 var app = express();
 app.get('/', function (req, res) {
  // res.send('Hello world\n');
 var msg = process.env.MSG
   res.send(msg +'\n');
 });
 
 app.listen(PORT);
 console.log('Running on http://localhost:' + PORT);
