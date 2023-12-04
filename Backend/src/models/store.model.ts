import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Store = sequelize.define("stores", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "userId",
    },
    imagePath: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "imagePath",
    },
    storeName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "storeName",
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
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "phoneNumber",
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "address",
    },
    area: {
        type: DataTypes.ENUM("a", "b", "c", "d", "e", "f"),
        allowNull: false,
        field: "area",
    },
    party: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "party",
    },
});
