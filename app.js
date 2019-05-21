const express = require("express");
const app = express();
const Sequelize = require('sequelize');

// DB Connection
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'http://adriennas.synology.me',
    port: 3307,
    dialect: 'mariadb'
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
