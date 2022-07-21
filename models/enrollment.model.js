import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class enrollmentModel extends Model {}

    enrollmentModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            studentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "student_id",
            },
            tutorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "tutor_id",
            },
            subjectId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "subject_id",
            },
            enrollmentDate: {
                type: DataTypes.DATE,
                allowNull: false,
                field: "enrollment_date",
            },
            comments: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "comments",
            },
            latestScore: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "latest_score",
            },
        
        },
        {
            sequelize,
            timestamps: false,
            modelName: "Enrollment",
            tableName: "enrollments",
        }
    );

    return enrollmentModel;    
};