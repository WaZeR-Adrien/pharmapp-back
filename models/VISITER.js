/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VISITER', {
    DMO_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PERSONNE',
        key: 'ID'
      }
    },
    CONTACT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PERSONNE',
        key: 'ID'
      }
    },
    ORGANISATION_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ORGANISATION',
        key: 'ID'
      }
    },
    COMMANDE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'COMMANDE',
        key: 'ID'
      }
    },
    DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HEURE: {
      type: DataTypes.TIME,
      allowNull: true
    },
    REMARQUE: {
      type: DataTypes.CHAR(250),
      allowNull: true
    }
  }, {
    tableName: 'VISITER'
  });
};
