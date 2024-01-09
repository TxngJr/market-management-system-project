import { sequelize } from "../config/database";
import { DataTypes } from 'sequelize';


export const Bill = sequelize.define("bills", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  },
  status: {
    type: DataTypes.ENUM("success", "pending"),
    allowNull: false,
    defaultValue: "pending",
    field: "status",
  },
  rentPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "rentPrice",
  },
  WaterPriceUnit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "WaterPriceUnit",
  },
  electricityPriceUnit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "electricityPriceUnit",
  },
  waterBill: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "waterBill",
  },
  electricityBill: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "electricityBill",
  },
  waterUnit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "waterUnit",
  },
  electricityUnit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "electricityUnit",
  },
  landId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "landId",
  },
  storeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: "storeId",
  },
});
