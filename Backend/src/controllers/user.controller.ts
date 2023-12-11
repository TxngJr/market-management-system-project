import { Request, Response } from "express";
import userService from "../services/user.service";
import { IUser, RequestAndUser, Role } from "../interfaces/user.interface";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const register = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const role = Role.ADMIN;

    const userExits: IUser | null = await userService.getUserByUsername(
      username
    );
    if (userExits) {
      return res.status(400).json({
        message: `There is already a user named ${userExits.username}.`,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const userCreate = await userService.createUser({
      username,
      hashPassword,
      role,
    });
    if (!userCreate) {
      return res.status(500).json({ message: "Fail to register" });
    }
    return res.status(201).json({ message: "Create user success" });
  } catch (error) {
    return res.status(500).json({ message: "Fail to register" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    const user: IUser | null = await userService.getUserByUsername(username);
    if (!user) {
      return res.status(400).json({
        message: `Password or Username Wrong.`,
      });
    }
    const passwordIsMatch = await bcrypt.compare(password, user.hashPassword!);
    if (!passwordIsMatch) {
      return res.status(400).json({
        message: `Password or Username Wrong.`,
      });
    }

    const token = await jwt.sign(
      { id: String(user.id) },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).json({ message: "Fail to register" });
  }
};

const profile = async (req: RequestAndUser, res: Response) => {
  return res.status(200).json(req.user);
};

const getParty = async (req: RequestAndUser, res: Response) => {
  const user: IUser = req.user!;
  const party: IUser[] | null = await userService.getUsersByParty(user.id!);
  return res.status(200).json(party);
};

export default {
  register,
  login,
  profile,
  getParty
};
