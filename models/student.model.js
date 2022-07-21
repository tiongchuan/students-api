import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class studentModel extends Model {}

    studentModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "name",
            },
            schoolId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "school_id",
            },
            parent: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "parent",
            },
            testimony: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "testimony",
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "Student",
            tableName: "students",
        }
    );

    return studentModel;    
};