const Produit = require('../models/Produit');

module.exports = class Product {
    static getByCategoryId(categorie_id, callback) {
        Produit.findAll({
            where: {
                CATEGORIE_ID: categorie_id
            }
        }).then(products => {
            callback(products);
        });
    }
}