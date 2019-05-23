const express = require("express");
const app = express();

const Category = require('./controllers/Category');

app.get('/categories', (req, res) => {
    Category.getAll(categories => {
        res.json(categories);
    })
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000!')
})
