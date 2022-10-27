import sequelize from "../db/db";
import { Model, DataTypes } from "sequelize";

class Course extends Model {
    declare id: number;
    declare name: string;
    declare code: string;
    declare capacity: number;
}

Course.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Course",
    }
);

Course.sync();

export default Course;
