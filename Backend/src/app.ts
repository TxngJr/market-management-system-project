import express from "express";
import { sequelize } from "./config/database";
import userRoutes from "./routes/user.route";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.use("/api", userRoutes);
app.post("/test",(req,res)=>{
  console.log(req.body)
})
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running at http://localhost:${PORT}`);
});
