/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DMO', {
    ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PERSONNE',
        key: 'ID'
      }
    },
    MDP: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    DATEEMBAUCHE: {
      type: DataTypes.DATEONLY,
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
    tableName: 'DMO'
  });
};
