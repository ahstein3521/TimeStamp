var express=require('express')
var bodyParser = require('body-parser');
var app=express();
var time=require('./dates');



app.listen(process.env.PORT||3000);


app.use('/',express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/timeStamp', function(req,res){
    res.send(time(req.body.date));
})


app.get('/:date', function(req,res){
    res.send(time(req.params.date));
})  