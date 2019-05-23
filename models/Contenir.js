/* jshint indent: 2 */

const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

module.exports = db.define('CONTENIR', {
    PRODUIT_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Produit',
            key: 'ID'
        }
    },
    COMMANDE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Commande',
            key: 'ID'
        }
    }
}, {
    tableName: 'CONTENIR'
});
