/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PERSONNE', {
    ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.CHAR(150),
      allowNull: true
    },
    ADRESSE: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    CP: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    VILLE: {
      type: DataTypes.CHAR(200),
      allowNull: true
    }
  }, {
    tableName: 'PERSONNE'
  });
};
