const Categorie = require('../models/Categorie');
const Produit = require('../models/Produit');

module.exports = class Category {

    static getAll(callback) {
        Categorie.findAll({
            include: [{
                model: Produit,
                as: 'PRODUITS'
            }]
        }).then(categories => {
            callback(categories);
        });
    }

    static add(body, callback) {
        Categorie.create({
            NOM: body.NOM
        }).then(category => {
            callback(category);
        })
    }
}
