var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.post('/', function (req, res) {
   console.log(req.body)
   console.log(req.body.value)
   res.status(200).json({value: Number(req.body.value)});
})

var server = app.listen(3333, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
