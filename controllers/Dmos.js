Personne = require('../models/Personne');

module.exports = class Dmo {

    static getAll(callback) {
        Personne.findAll({
            where: {
                TYPE: 'DMO'
            }
        }).then(dmos => {
            callback(dmos);
        })
    }
}
