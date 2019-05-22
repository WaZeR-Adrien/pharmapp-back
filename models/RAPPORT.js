/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RAPPORT', {
    ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    },
    REMARQUE: {
      type: DataTypes.CHAR(250),
      allowNull: true
    }
  }, {
    tableName: 'RAPPORT'
  });
};
