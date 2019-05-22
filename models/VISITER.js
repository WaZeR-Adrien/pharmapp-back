/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VISITER', {
    RAPPORT_ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'RAPPORT',
        key: 'ID'
      }
    },
    DMO_ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      references: {
        model: 'DMO',
        key: 'ID'
      }
    },
    CONTACT_ID: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      references: {
        model: 'CONTACT',
        key: 'PERSONNE_ID'
      }
    },
    DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HEURE: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'VISITER'
  });
};
