/* jshint indent: 2 */

const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

module.exports = db.define('VISITER', {
    DMO_ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Personne',
        key: 'ID'
      }
    },
    CONTACT_ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Personne',
        key: 'ID'
      }
    },
    ORGANISATION_ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Organisation',
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
    },
    DATE: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    HEURE: {
      type: Sequelize.TIME,
      allowNull: true
    },
    REMARQUE: {
      type: Sequelize.CHAR(250),
      allowNull: true
    }
  }, {
    tableName: 'VISITER'
});
