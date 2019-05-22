/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PERSONNE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    NOM: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    PRENOM: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ADRESSE: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    CP: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    VILLE: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    MDP: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    DATEEMBAUCHE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    STATUT: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    APPARTENIR_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ORGANISATION',
        key: 'ID'
      }
    },
    ETRE_RESPONSABLE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ORGANISATION',
        key: 'ID'
      }
    }
  }, {
    tableName: 'PERSONNE'
  });
};
