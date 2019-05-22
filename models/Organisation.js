/* jshint indent: 2 */

const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

module.exports = db.define('ORGANISATION', {
    ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    RAISONSOCIALE: {
      type: Sequelize.CHAR(50),
      allowNull: true
    }
  }, {
    tableName: 'ORGANISATION'
});
