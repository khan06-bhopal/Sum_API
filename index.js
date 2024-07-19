const express =  require("express");

const app = express();

const port = 8080;

const bodyParser = require('body-parser')

app.use(bodyParser.json());

 app.listen(port , function(err) { 

    if(err){ 
        console.log(" Error while Starting Server!")
    }
    else{ 
        console.log(" Server has been started at " + port)
    }
 })

 app.get('/sum' , function(req , res){ 
    res.send('Hello ');

 
 })

 app.post('/sum' , function(req , res) { 

     console.log(" number 1 ", req.body.num1 )
    console.log(" number 2 ", req.body.num2 )

    const sum = req.body.num1 + req.body.num2;

    res.send('sum is ' + sum);
 })