import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Bill = sequelize.define("bills", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
    },
    storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "storeId",
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "price",
    },
    status: {
        type: DataTypes.ENUM("success", "pending"),
        allowNull: false,
        field: "status",
    },
    party: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "party",
    },
});
