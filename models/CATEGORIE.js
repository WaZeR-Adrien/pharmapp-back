/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CATEGORIE', {
    ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    },
    NOM: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    tableName: 'CATEGORIE'
  });
};
