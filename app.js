// Libs
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Controllers
const Category = require('./controllers/Category');
const Contact = require('./controllers/Contact');
const Visit = require('./controllers/Visit');
const Command = require('./controllers/Command');
const People = require('./controllers/People');
const Company = require('./controllers/Company');
const Dmo = require('./controllers/Dmos');
const Product = require('./controllers/Product')

// Models conf
const Categorie = require('./models/Categorie');
const Produit = require('./models/Produit');
Categorie.hasMany(Produit, {
    as: 'PRODUITS',
    foreignKey: 'CATEGORIE_ID',
    target: 'CATEGORIE_ID'
})

// Errors
const unauthorized = {
    code: "unauthorized",
    message: "Your need a valid authentication to the API."
}

// Router conf
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, token')
    next();
});

// Routes
app.post('/auth', (req, res) => {
    People.login(req.body, auth => {
        res.json(auth);
    });
});

app.get('/contacts', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Contact.getAll(contacts => {
                res.json(contacts);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.get('/dmos', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Dmo.getAll(dmos => {
                res.json(dmos);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.get('/contacts/:id/commands', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Command.getByContactId(req.params.id, command => {
                res.json(command);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.post('/dmos/:id/visits', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Visit.add(req.params.id, req.body, visit => {
                res.json(visit);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.post('/:type(contacts|dmos|admins)', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            People.add(req.params.type, req.body, people => {
                res.json(people);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.post('/companies', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Company.add(req.body, company => {
                res.json(company);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.put('/dmos/:id/visits', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Visit.put(req.params.id, req.body, visit => {
                res.json(visit);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.get('/:type(dmos|contacts)/:id/visits', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Visit.getByPeopleId(req.params.type, req.params.id, visits => {
                res.json(visits);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.post('/categories', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Category.add(req.body, category => {
                res.json(category);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.get('/categories', (req, res) => {
    Category.getAll(categories => {
        res.json(categories);
    });
});

app.get('/categories/:id/products', (req, res) => {
    Product.getByCategoryId(req.params.id, visits => {
        res.json(visits);
    });
});

app.post('/products', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Product.add(req.body, product => {
                res.json(product);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

app.put('/products/:id', (req, res) => {
    People.check(req.headers.token, auth => {
        if (auth) {
            Product.put(req.params.id, req.body, product => {
                res.json(product);
            });
        } else {
            res.status(401).json(unauthorized);
        }
    });
});

// Serve conf
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port 3000!')
})
