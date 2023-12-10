import { Request, Response } from "express";
import userService from "../services/user.service";
import storeService from "../services/store.service";
import { IUser, RequestAndUser, Role } from "../interfaces/user.interface";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { IRequestCreateStore } from "../interfaces/store.interface";

dotenv.config();

const createStore = async (req: RequestAndUser, res: Response) => {
  try {
    const user: IUser = req.user!;
    if (user.role == "user") {
      return res.status(400).json({ message: "You are not admin" });
    }
    const data: IRequestCreateStore = req.body;

    const userExits: IUser | null = await userService.getUserByUsername(
      data.user.username
    );
    if (userExits) {
      return res.status(400).json({
        message: `There is already a user named ${userExits.username}.`,
      });
    }

    data.user.hashPassword = await bcrypt.hash(data.user.hashPassword!, 10);
    data.user.role = Role.USER;
    data.user.party = user.id;

    const userCreate = await userService.createUser(data.user);
    if (!userCreate) {
      return res.status(500).json({ message: "Fail to createUser" });
    }

    data.store.party = user.id!;
    data.store.userId = userCreate.id!;
    const store = await storeService.createStore(data.store);
    if (!store) {
      return res.status(500).json({ message: "Fail to createStore" });
    }
    return res.status(201).json({ message: "Create success" });
  } catch (error) {
    return res.status(500).json({ message: "Fail to create" });
  }
};

const getStoreParty = async (req: RequestAndUser, res: Response) => {
  const user: IUser = req.user!;
  if (user!.role == "admin") {
    user!.party = user!.id;
  }
  const store = await storeService.getStores(user.party!);
  return res.status(200).json(store);
};

export default {
  createStore,
  getStoreParty,
};
