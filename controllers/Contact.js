Personne = require('../models/Personne');

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

}
