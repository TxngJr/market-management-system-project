import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "market_management_system",
  models: [__dirname + '../models']
});

