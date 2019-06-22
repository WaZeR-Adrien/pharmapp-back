const Personne = require('../models/Personne');

module.exports = class Contact {

    static getAll(callback) {
        Personne.findAll({
            where: {
                TYPE: 'CONTACT'
            }
        }).then(contacts => {
            callback(contacts);
        })
    }

    static getById(id, callback) {
        Personne.findOne({
            where: {
                ID: id,
                TYPE: 'CONTACT'
            }
        }).then(contact => {
            callback(contact);
        })
    }
}
