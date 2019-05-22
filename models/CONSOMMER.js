/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONSOMMER', {
    PRODUIT_ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PRODUIT',
        key: 'ID'
      }
    },
    ORGANISATION_ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ORGANISATION',
        key: 'ID'
      }
    },
    QUANTITE: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'CONSOMMER'
  });
};
