import { Model, DataTypes } from "sequelize";
import sequelize from "./db";

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

export default Student;