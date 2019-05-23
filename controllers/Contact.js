Personne = require('../models/Personne');

module.exports = class Contact {

    static getAll(callback) {
        Personne.findAll({
            where: {
                TYPE: 'contact'
            }
        }).then(contacts => {
            callback(contacts);
        })
    }

}
