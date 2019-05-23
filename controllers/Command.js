const Commande = require('../models/Commande');
const Personne = require('../models/Personne');

module.exports = class Command {

    static getByContactId(id, callback) {
        Personne.findByPk(id).then(contact => {
            Commande.findAll({
                where: {
                    ORGANISATION_ID: contact.APPARTENIR_ID
                }
            }).then(commands => {
                callback(commands);
            });
        })
    }
}