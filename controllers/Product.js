const Produit = require('../models/Produit');

module.exports = class Product {

    static add(body, callback) {
        Produit.create({
            ID: body.ID,
            NOM: body.NOM,
            MARQUE: body.MARQUE,
            PRIX: body.PRIX,
            CATEGORIE_ID: body.CATEGORIE_ID
        }).then(product => {
            callback(product);
        })
    }

    static put(product_id, body, callback) {
        Produit.update({
            NOM: body.NOM,
            MARQUE: body.MARQUE,
            PRIX: body.PRIX,
            CATEGORIE_ID: body.CATEGORIE_ID
        }, {
            where: {
                ID: product_id,
            }
        }).then(visit => {
            callback(visit);
        })

    }

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