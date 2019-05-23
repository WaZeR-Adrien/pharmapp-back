const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const Category = require('./controllers/Category');
const Contact = require('./controllers/Contact');
const Visit = require('./controllers/Visit');
const Command = require('./controllers/Command');
const People = require('./controllers/People');
const Company = require('./controllers/Company');
const Dmo = require('./controllers/Dmos');
const Product = require('./controllers/Product')
const Auth = require('./controllers/Auth');

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

app.get('/dmos', (req, res) => {
    Dmo.getAll(dmos => {
        res.json(dmos);
    });
})

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

app.post('/:type(contacts|dmos|admins)', (req, res) => {
    People.add(req.params.type, req.body, people => {
        res.json(people);
    });
});

app.post('/companies', (req, res) => {
    Company.add(req.body, company => {
        res.json(company);
    });
});

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

app.get('/categories/:id/products', (req, res) => {
    Product.getByCategoryId(req.params.id, visits => {
        res.json(visits);
    });
})

app.post('/products', (req, res) => {
    Product.add(req.body, product => {
        res.json(product);
    });
})

app.put('/products/:id', (req, res) => {
    Product.put(req.params.id, req.body, product => {
        res.json(product);
    });
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000!')
})
