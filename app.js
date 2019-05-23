const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const Category = require('./controllers/Category');
const Contact = require('./controllers/Contact');
const Visit = require('./controllers/Visit');
const Command = require('./controllers/Command');
const People = require('./controllers/People');
const Company = require('./controllers/Company');


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

app.get('/contacts/:id/commands', (req, res) => {
    Command.getByContactId(req.params.id, command => {
        res.json(command);
    });
});

app.post('/dmos/:id/visits', (req, res) => {
    Visit.add(req.params.id, req.body, visit => {
        res.json(visit);
    });
});

app.post('/:type(contacts | dmos | admins)', (req, res) => {
    People.add(req.params.type, req.body, people => {
        res.json(people);
    });
});

app.post('/companies', (req, res) => {
    Company.add(req.body, company => {
        res.json(company);
    });
});


let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000!')
})
