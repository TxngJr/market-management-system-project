import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  },
  imagePath: {
    type: DataTypes.STRING || null,
    allowNull: true,
    defaultValue: null,
    field: "imagePath",
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "firstName",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "lastName",
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "email",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "address",
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "phoneNumber",
  },
  isOwner: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    field: "isOwner",
  },
  landId: {
    type: DataTypes.INTEGER || null,
    allowNull: true,
    defaultValue: null,
    field: "landId",
  },
  storeId: {
    type: DataTypes.INTEGER || null,
    allowNull: true,
    defaultValue: null,
    field: "storeId",
  },
});
