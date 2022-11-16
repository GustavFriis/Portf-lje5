const mysql = require("mysql2");
require('dotenv').config();
port = 3000

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)

const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.MYSQL_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    multipleStatements: true,
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('connected');
    } else {
        console.log(err);
        console.log('connection Failed');
    }
});

mysqlConnection.query(
"SELECT UserName, UserMail FROM cafe_database.users WHERE userID > 5;",
    (err, results, fields) => {
        if (!err) {
            console.log(results);
        } else {
            console.log(err);
            console.log('connection Failed');
    }
});