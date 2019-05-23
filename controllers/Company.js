const Organisation = require('../models/organisation');

module.exports = class Company {

    static add(body, callback) {
        Organisation.create({
            RAISONSOCIALE: body.RAISONSOCIALE
        }).then(company => {
            callback(company);
        })
    }

}