
import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class viewEnrollmentModel extends Model {}

    viewEnrollmentModel.init(
        {
            studentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "id",
            },
            studentName: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "student",
            },
            parentName: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "parent",
            },
            testimony: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "testimony",
            },
            schoolId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "school_id",
            },
            subject: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "subject",
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "description",
            },
            comments: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "comments",
            },
            latestScore: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "latest_score",
            },
            enrollmentDate: {
                type: DataTypes.DATE,
                allowNull: false,
                field: "enrollment_date",
            },
            tutor: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "tutor",
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "viewEnrollment",
            tableName: "viewEnrollment",
        }
    );

    return viewEnrollmentModel;    
};