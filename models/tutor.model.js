import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class tutorModel extends Model {}

    tutorModel.init(
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
            experience: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "experience",
            },
            highestEducation: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "highest_education",
            },
            hourlyRate: {
                type: DataTypes.FLOAT,
                allowNull: false,
                field: "hourly_rate",
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "Tutor",
            tableName: "tutors",
        }
    );

    return tutorModel;    
};