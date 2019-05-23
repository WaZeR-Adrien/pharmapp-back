const express = require("express");
const app = express();

const Category = require('./controllers/Category');
const Contact = require('./controllers/Contact');

app.get('/categories', (req, res) => {
    Category.getAll(categories => {
        res.json(categories);
    });
});

app.get('/contacts', (req, res) => {
    Contact.getAll(contacts => {
        res.json(contacts);
    })
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000!')
})
