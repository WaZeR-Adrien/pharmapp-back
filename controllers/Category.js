const Categorie = require('../models/Categorie');

module.exports = class Category {

    static getAll(callback) {
        Categorie.findAll().then(categories => {
            callback(categories);
        });
    }

}
