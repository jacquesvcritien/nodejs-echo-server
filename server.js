var express = require('express');
var app = express();

app.get('/', function (req, res) {
   console.log(req.query.value)
   res.status(200).json({value: Number(req.query.value)/2});
})

var server = app.listen(3333, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
