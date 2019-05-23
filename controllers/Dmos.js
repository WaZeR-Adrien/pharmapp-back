Personne = require('../models/Personne');

module.exports = class Dmo {

    static getAll(callback) {
        Personne.findAll({
            where: {
                TYPE: 'dmo'
            }
        }).then(dmos => {
            callback(dmos);
        })
    }

}