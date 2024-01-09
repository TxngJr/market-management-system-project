import express from "express";
import { sequelize } from "./config/database";
import userRoutes from "./routes/user.route";
import storeRoutes from "./routes/store.route";
import billRoutes from "./routes/bill.route";
import cors from "cors";
import dotenv from "dotenv";
import cron from "node-cron";
import billController from "./controllers/bill.controller";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/stores", storeRoutes);
app.use("/bills", billRoutes);

cron.schedule(
  //second, minute, hour, day of month, month, day of week
  "0 0 5 * *",
  async() => {
    await billController.generateBillsForAllStores();
  },
  {
    timezone: "Asia/Bangkok",
  }
);

app.listen(process.env.PORT!, async () => {
  await sequelize.sync();
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
