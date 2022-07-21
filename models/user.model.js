import { DataTypes, Model } from "sequelize";
import { hash, compare } from 'bcrypt';

export default function (sequelize) {
  class User extends Model { }

  // KIV: include validation.
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        field: "email"
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "password"
      },
      role: {
        type: DataTypes.STRING(20),
        //allowNull: false,
        defaultValue: "USER",
        field: "role"
      }

    },
    {
      sequelize,
      timestamps: false,  // turn off timestamps creation.
      modelName: "User",
      tableName: "users",
    }
  );

  // Add a beforeCreate hook to hashed password before create.
  User.beforeCreate(async (user, options) => {
    const hashedPassword = await hash(user.password, 10);
    user.password = hashedPassword;
  });

  // Attach a custom function into User prototype to validate password.
  User.prototype.validPassword = async function (password) {
    return await compare(password, this.password);
  }

  return User;
};