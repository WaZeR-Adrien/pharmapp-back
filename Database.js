const db = require('./config').database;
const Sequelize = require('sequelize');

module.exports = class Database {

    static _init() {
        Database.con = new Sequelize(db.dbname, db.user, db.password, {
            host: db.host,
            port: db.port,
            dialect: 'mariadb',
            define: {
                timestamps: false
            }
        });
    }

    static getConnection() {
        if (Database.con == null) {
            Database._init();
        }

        return Database.con;
    }


}
