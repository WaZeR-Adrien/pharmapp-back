const Organisation = require('../models/Organisation');

module.exports = class Company {

    static add(body, callback) {
        Organisation.create({
            RAISONSOCIALE: body.RAISONSOCIALE
        }).then(company => {
            callback(company);
        })
    }
}