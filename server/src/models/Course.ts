import sequelize from "../db/db";
import { Model, DataTypes } from "sequelize";

class Course extends Model {
    declare id: number;
    declare name: string;
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
    },
    {
        sequelize,
        modelName: "Course",
    }
);

Course.sync()

export default Course;
