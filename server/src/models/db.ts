import {Sequelize} from "sequelize";

const user = process.env.DBUSER;
const password = process.env.DBPASS;
const port = process.env.DBPORT;
const name = process.env.DBNAME;
const host = process.env.DBHOST;

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${name}`);

export const closeDatabase = () => {
    sequelize.close();
}

export default sequelize;
