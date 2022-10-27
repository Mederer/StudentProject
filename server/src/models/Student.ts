import { Model, DataTypes } from "sequelize";
import sequelize from "../db/db";

class Student extends Model{
    declare id: number;
    declare name: string;
};

Student.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: "Student"
});

Student.sync();

export default Student;