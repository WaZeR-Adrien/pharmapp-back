/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMMANDE', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    QUANTITE: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRIXTOTAL: {
      type: DataTypes.INTEGER(50),
      allowNull: true
    },
    ORGANISATION_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ORGANISATION',
        key: 'ID'
      }
    }
  }, {
    tableName: 'COMMANDE'
  });
};
