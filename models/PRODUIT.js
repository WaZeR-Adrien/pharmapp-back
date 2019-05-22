/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PRODUIT', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    NOM: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    MARQUE: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    PRIX: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    CATEGORIE_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'CATEGORIE',
        key: 'ID'
      }
    }
  }, {
    tableName: 'PRODUIT'
  });
};
