const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const Category = require('./controllers/Category');
const Contact = require('./controllers/Contact');
const Visit = require('./controllers/Visit');

app.use(bodyParser.json());

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

app.post('/dmos/:id/visits', (req, res) => {
    Visit.add(req.params.id, req.body, visit => {
        res.json(visit);
    });
})

app.put('/dmos/:id/visits', (req, res) => {
    Visit.put(req.params.id, req.body, visit => {
        res.json(visit);
    });
})

app.get('/:type(dmos|contacts)/:id/visits', (req, res) => {
    Visit.getByPeopleId(req.params.type, req.params.id, visits => {
        res.json(visits);
    });
})

app.post('/categories', (req, res) => {
    Category.add(req.body, category => {
        res.json(category);
    });
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000!')
})
