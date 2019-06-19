/* jshint indent: 2 */

const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

const Produit = db.define('PRODUIT', {
    ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NOM: {
        type: Sequelize.CHAR(50),
        allowNull: true
    },
    PRIX: {
        type: Sequelize.INTEGER(10),
        allowNull: true
    },
    CATEGORIE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
            model: 'Categorie',
            key: 'ID'
        }
    }
}, {
    tableName: 'PRODUIT'
});

module.exports = Produit;
