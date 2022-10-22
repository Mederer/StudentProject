"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDatabase = void 0;
const sequelize_1 = require("sequelize");
const user = process.env.DBUSER;
const password = process.env.DBPASS;
const port = process.env.DBPORT;
const name = process.env.DBNAME;
const host = process.env.DBHOST;
const sequelize = new sequelize_1.Sequelize(`postgres://${user}:${password}@${host}:${port}/${name}`);
const closeDatabase = () => {
    sequelize.close();
};
exports.closeDatabase = closeDatabase;
exports.default = sequelize;
