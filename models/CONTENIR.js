/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONTENIR', {
    PRODUIT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'PRODUIT',
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
    }
  }, {
    tableName: 'CONTENIR'
  });
};
