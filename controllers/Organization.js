const Organisation = require('../models/Organisation');

module.exports = class Company {

    static add(body, callback) {
        Organisation.create({
            RAISONSOCIALE: body.RAISONSOCIALE,
            include: [{
                model: Personne,
                as: 'PERSONNES'
            }]
        }).then(company => {
            callback(company);
        })
    }

    static getAll(callback) {
        Organisation.findAll().then(companies => {
            callback(companies);
        })
    }
}
