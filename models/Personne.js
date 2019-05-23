/* jshint indent: 2 */

const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

module.exports = db.define('PERSONNE', {
    ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: Sequelize.CHAR(20),
      allowNull: true
    },
    NOM: {
      type: Sequelize.CHAR(50),
      allowNull: true
    },
    PRENOM: {
      type: Sequelize.CHAR(50),
      allowNull: true
    },
    EMAIL: {
      type: Sequelize.CHAR(50),
      allowNull: true
    },
    ADRESSE: {
      type: Sequelize.CHAR(100),
      allowNull: true
    },
    CP: {
      type: Sequelize.INTEGER(5),
      allowNull: true
    },
    VILLE: {
      type: Sequelize.CHAR(100),
      allowNull: true
    },
    MDP: {
      type: Sequelize.CHAR(100),
      allowNull: true
    },
    DATEEMBAUCHE: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    STATUT: {
      type: Sequelize.CHAR(50),
      allowNull: true
    },
    APPARTENIR_ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Organisation',
        key: 'ID'
      }
    },
    ETRE_RESPONSABLE_ID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Organisation',
        key: 'ID'
      }
    }
  }, {
    tableName: 'PERSONNE'
});