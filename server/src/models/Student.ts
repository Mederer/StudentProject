import { Model, DataTypes } from "sequelize";
import sequelize from "../db/db";

class Student extends Model {
    declare id: number;
    declare firstname: string;
    declare lastname: string;
    declare email: string;
    declare phone: string;
}

Student.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Student",
    }
);

Student.sync();

export default Student;
