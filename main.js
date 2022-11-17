const mysql = require("mysql2");
require('dotenv').config();

const express = require('express')
const app = express()
app.listen(3000)
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.send('hej')
})



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

// all users
app.get('/users', (req, res) => {
    const query = "SELECT * FROM cafe_database.users;";
    mysqlConnection.query(
        query,

        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

// all cafes
app.get('/cafes', (req, res) => {
    const query = "SELECT * FROM cafe_database.cafes;";
    mysqlConnection.query(
        query,

        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

// users by id
app.get('/users/id/:UserID', (req, res) => {
    const query = "SELECT * FROM users WHERE UserID = ?;";
    const UserID = req.params.UserID;
    mysqlConnection.query(
        query, [UserID],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
})

// cafés by id
app.get('/cafes/id/:CafeID', (req, res) => {
    const query = "SELECT * FROM cafes WHERE CafeID = ?;";
    const CafeID = req.params.CafeID;
    mysqlConnection.query(
        query, [CafeID],
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
            }
        }
    );
});

app.post('/cafes/add', (req, res) => {
    const CafeName = req.body.CafeName;
    console.log(CafeName)

    res.sendStatus(200)
    }
);

