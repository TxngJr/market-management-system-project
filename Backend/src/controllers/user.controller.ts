import { Request, Response } from "express";
import userService from "../services/user.service";
import { IUser, RequestAndUser } from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { User } from "../models/user.model";
import { Model } from "sequelize";
import jwt from "jsonwebtoken";

dotenv.config();

// wait create land and update landId in user 
const register = async (req: Request, res: Response) => {
  try {
    const {
      imagePath,
      firstName,
      lastName,
      username,
      password,
      email,
      address,
      phoneNumber,
    }: {
      imagePath?: string;
      firstName: string;
      lastName: string;
      username: string;
      password: string;
      email: string;
      address: string;
      phoneNumber: string;
    } = req.body;

    const exitUser: Model<IUser> | null = await User.findOne({
      where: { username },
    });
    if (exitUser) {
      return res.status(400).json({
        message: `There is already a user named ${username}.`,
      });
    }
    const hashPassword: string = await bcrypt.hash(password, 10);
    const isOwner: boolean = true;
    const data = {
      imagePath,
      firstName,
      lastName,
      username,
      hashPassword,
      email,
      address,
      phoneNumber,
      isOwner,
    };
    const userCreate: Model<IUser> | null = await User.create({
      ...data,
    });

    if (!userCreate) {
      return res.status(404).json({ message: "Fail to register" });
    }
    return res.status(201).json({ message: "Create user success" });
  } catch (error: any) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const findUser: Model<IUser> | null = await User.findOne({
      where: { username },
    });
    if (!findUser) {
      return res.status(400).json({
        message: `Password or Username Wrong.`,
      });
    }
    const passwordIsMatch = await bcrypt.compare(
      password,
      findUser.dataValues.hashPassword!
    );
    if (!passwordIsMatch) {
      return res.status(400).json({
        message: `Password or Username Wrong.`,
      });
    }

    const token = await jwt.sign(
      { id: String(findUser.dataValues.id) },
      process.env.JWT_SECRET!,
      {
        expiresIn: "5h",
      }
    );
    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const self = async (req: RequestAndUser, res: Response) => {
  return res.status(200).json(req.user);
};

// const getParty = async (req: RequestAndUser, res: Response) => {
//   const user: IUser = req.user!;
//   const party: IUser[] | null = await userService.getUsersByParty(user.id!);
//   return res.status(200).json(party);
// };

export default {
  register,
  login,
  self
};
