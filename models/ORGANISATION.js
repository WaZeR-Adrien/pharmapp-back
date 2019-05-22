/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ORGANISATION', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    RAISONSOCIALE: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    tableName: 'ORGANISATION'
  });
};
