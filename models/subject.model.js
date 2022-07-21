import { DataTypes, Model } from "sequelize";

export default function (sequelize) {

    class subjectModel extends Model {}

    subjectModel.init(
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
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "description",
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "Subject",
            tableName: "subjects",
        }
    );

    return subjectModel;    
};