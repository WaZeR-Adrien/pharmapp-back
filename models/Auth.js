/* jshint indent: 2 */

const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

const Auth = db.define('AUTH', {
    ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    TOKEN: {
        type: Sequelize.CHAR(150),
        allowNull: false
    },
    DATE: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: false
    },
    PERSONNE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
            model: 'Personne',
            key: 'ID'
        }
    }
}, {
    tableName: 'AUTH'
});

module.exports = Auth;
