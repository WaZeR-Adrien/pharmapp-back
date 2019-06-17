const Sequelize = require('sequelize');
const db = require('../Database').getConnection();

const Categorie = db.define('CATEGORIE', {
    ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    NOM: {
        type: Sequelize.CHAR(255),
        allowNull: true
    }
}, {
    tableName: 'CATEGORIE'
});

module.exports = Categorie;
