/* jshint indent: 2 */

const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

const Organisation = db.define('ORGANISATION', {
    ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    RAISONSOCIALE: {
        type: Sequelize.CHAR(50),
        allowNull: true
    }
}, {
    tableName: 'ORGANISATION'
});

module.exports = Organisation;
