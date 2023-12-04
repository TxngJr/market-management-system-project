import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "username",
  },
  hashPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "hashPassword",
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
    field: "role",
  },
  party: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "party",
  },
});
