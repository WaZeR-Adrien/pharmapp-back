/* jshint indent: 2 */

const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

module.exports = db.define('CATEGORIE', {
    ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NOM: {
        type: Sequelize.CHAR(50),
        allowNull: true
    }
}, {
    tableName: 'CATEGORIE'
});
