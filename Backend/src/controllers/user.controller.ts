import { Request, Response } from "express";
import userService from "../services/user.service";
import { IUser, Role } from "../interfaces/user.interface";

const register = async (req: Request, res: Response) => {
    let { id, username, hashPassword, role, party } = req.body;

  console.log(req.body);
  const user = await userService.createUser({id, username, hashPassword, role, party});
  if (user) {
    return res
      .status(404)
      .json({ message: `There is already a user named ${user}.` });
  }
  console.log(user);
  return res.status(201).json({ message: "Update succes" });
};

export default {
  register,
};
