/**
 * Created by TooNies1810 on 6/12/16.
 */

var express = require('express');
var mysql = require('mysql');
var app = express();

app.get('/', function (req, res) {
    res.end("hello sql");
});

app.get('/users', function (req, res) {
    connection.query('select * from user', '', function (err, data) {
        // var userArr = [];
        // for (var i=0; i<data.length; i++){
        //     var user = data[i];
        //     userArr.push(user);
        // }
        // res.end(JSON.stringify(userArr));

        res.end(JSON.stringify(data));
    });
});

app.get('/user/:id', function (req, res) {
   connection.query('select * from user', '', function (err, data) {
       for (var i=0; i<data.length; i++){
           var user = data[i];
           if (user["id"] == req.params.id){
               res.end(user);
               break;
           }
       }
   }) ;
});


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
});

connection.connect(function (err) {
    if(err) throw err;
    console.log("you are now connect to mysql!");

    app.listen(3000, function () {
        console.log("server is listening on port 3000");
    });
});