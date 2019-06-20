/* jshint indent: 2 */
const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

const Commande = db.define('COMMANDE', {
    ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    QUANTITE: {
        type: Sequelize.INTEGER(10),
        allowNull: true
    },
    DATE: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    PRIXTOTAL: {
        type: Sequelize.INTEGER(50),
        allowNull: true
    },
    ORGANISATION_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
            model: 'Organisation',
            key: 'ID'
        }
    }
}, {
    tableName: 'COMMANDE'
});

module.exports = Commande
