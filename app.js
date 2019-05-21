const Config = require("config")
const db = Config.database;

const express = require("express");
const app = express();
const Sequelize = require('sequelize');

// DB Connection
const sequelize = new Sequelize(db.dbname, db.user, db.password, {
    host: db.host,
    port: db.port,
    dialect: 'mariadb'
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
