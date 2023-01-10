const mysql = require("mysql2");
require('dotenv').config();
const cors = require("cors");
const express = require('express')
const app = express()
app.listen(3000)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
        origin: "*"
    })
);
/*const cors_url = process.env.NODE_ENV === "prod" ? URL_FOR_FRONTEND : "*";*/
//
app.get('/', function (req, res) {
    res.send('hej')
})


const mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    multipleStatements: true,
    ssl: {
        "rejectUnauthorized": this.host === "localhost"
    }
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
    const query = "SELECT * FROM users;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
                res.sendStatus(500)
            }
        }
    );
})

// all cafes
app.get('/cafes', (req, res) => {
    const query = "SELECT * FROM cafes;";
    mysqlConnection.query(
        query,
        (err, results, fields) => {
            if (!err) {
                res.json(results);
            } else {
                console.log(err);
                res.sendStatus(500)
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
                res.sendStatus(500)
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
                res.sendStatus(500)
            }
        }
    );
});


// create user
app.post('/users/add', (req, res) => {
        const UserName = req.body.UserName;
        const UserMail = req.body.UserMail;
        mysqlConnection.query('INSERT INTO users(UserName, UserMail) VALUES(?,?)', [UserName, UserMail],
            (err, results, fields) => {
                if (!err) {
                    res.sendStatus(200);
                } else {
                    console.log(err);
                    res.sendStatus(500)
                }
            }
        )

    }
);

// create cafe
app.post('/cafes/', (req, res) => {
        const PriceRange = req.body.PriceRange;
        const Cozy = req.body.Cozy;
        const Postcode = req.body.Postcode;
        const Address = req.body.Address;
        const Size = req.body.Size;
        const Wifi = req.body.Wifi;
        const CafeName = req.body.CafeName;
        mysqlConnection.query('INSERT INTO cafes(CafeName, Cozy, PriceRange, Wifi, Postcode, Address, Size) VALUES(?,?,?,?,?,?,?)', [CafeName, Cozy, PriceRange, Wifi, Postcode, Address, Size],
            (err, results, fields) => {
                if (!err) {
                    res.sendStatus(200);
                } else {
                    console.log(err);
                    res.sendStatus(500)
                }
            }
        )

    }
);

// eksamen
app.get('https://localhost:3000/eksamen', (req, res) => {
    let numbers = [1,2,3,4,5]
})
