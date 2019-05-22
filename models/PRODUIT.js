/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PRODUIT', {
    ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    },
    CATEGORIE_ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      references: {
        model: 'CATEGORIE',
        key: 'ID'
      }
    },
    NOM: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    MARQUE: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    tableName: 'PRODUIT'
  });
};
