const express = require("express");
const app = express();
const Tools = require('./utils/Tools');

const Category = require('./controllers/Category');

app.get('/categories', function (req, res) {
    Category.getAll(categories => {
        res.json(categories);
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
