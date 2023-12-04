import express from "express";
import userService from "./services/user";
import { sequelize } from "./config/database";
import {User} from "./models/user";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.post("/users", async (req, res) => {
  // const user = await userService.createUser({
  //   username: "jame",
  //   email: "hello@gmail.com",
  //   hashPassword: "12345678",
  // });
  const user = await User.create<any>({
    username: "jame",
    email: "hello@gmail.com",
    hashPassword: "12345678",
  });

  res.status(201).json(user);
});

app.get("/users", async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
});

app.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log(`Server is running at http://localhost:${PORT}`);
});
