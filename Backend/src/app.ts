import express from "express";
import { sequelize } from "./config/database";
import userRoutes from "./routes/user.route";
import storeRoutes from "./routes/store.route";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.use("/users", userRoutes);
app.use("/stores", storeRoutes);

app.listen(process.env.PORT!, async () => {
  await sequelize.sync();
  console.log(`Server is running at http://localhost:${PORT}`);
});
