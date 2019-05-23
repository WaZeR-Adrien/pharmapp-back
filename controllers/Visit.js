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

    static getByPeopleId(type, people_id, callback) {
        const where = type == 'dmos' ? {DMO_ID: people_id} : {CONTACT_ID: people_id};

        Visiter.findAll({
            where
        }).then(visits => {
            callback(visits);
        });
    }

    static put(dmo_id, body, callback) {
        Visiter.update({
            REMARQUE: body.remarque
        }, {
            where: {
                DMO_ID: dmo_id,
                CONTACT_ID: body.contact_id,
                ORGANISATION_ID: body.organisation_id
            }
        }).then(visit => {
            callback(visit);
        })

    }
}
