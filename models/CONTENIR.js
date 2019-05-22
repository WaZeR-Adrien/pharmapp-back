/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONTENIR', {
    PRODUIT_ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PRODUIT',
        key: 'ID'
      }
    },
    RAPPORT_ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'RAPPORT',
        key: 'ID'
      }
    },
    ACCEPTATION: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'CONTENIR'
  });
};
