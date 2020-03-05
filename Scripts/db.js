var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    //db properties
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'userdb'
});

connection.connect(function(error) {
    if (!!error) {
        console.log('Error');
    }
    else {
        console.log('Connected');
    }
});

app.get('/', function(req, res) {
    connection.query("SELECT * FROM userdb", function(error, rows, fields) {
        if (!!error) {
        }
    })
})

app.listen(1337);