const Visiter = require('../models/Visiter');

module.exports = class Visit {

    static add(id, body, callback) {
        Visiter.create({
            DMO_ID: id,
            ORGANISATION_ID: body.ORGANISATION_ID,
            COMMANDE_ID: body.COMMANDE_ID,
            CONTACT_ID: body.CONTACT_ID
        }).then(visit => {
            callback(visit);
        })
    }

}
