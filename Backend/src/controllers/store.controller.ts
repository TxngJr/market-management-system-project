import { Response } from "express";
import userService from "../services/user.service";
import storeService from "../services/store.service";
import { IUser, RequestAndUser, Role } from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import {
  Area,
  IRequestCreateStore,
  IRequestUpdateStore,
  IStore,
  RentalType,
} from "../interfaces/store.interface";

dotenv.config();

const createStore = async (req: RequestAndUser, res: Response) => {
  try {
    const user: IUser = req.user!;
    if (user.role !== "admin") {
      return res.status(400).json({ message: "You are not admin" });
    }
    const data: IRequestCreateStore = req.body;

    if (!Object.values(Area).includes(data.store.area)) {
      return res.status(400).json({
        message: `Have not Area ${data.store.area}`,
      });
    }
    if (!Object.values(RentalType).includes(data.store.rentalType)) {
      return res.status(400).json({
        message: `Have not rentalType ${data.store.rentalType}`,
      });
    }

    const storeExits: IStore | null =
      await storeService.checkAreaStoreExistsParty(data.store.area, user.party!);
    if (storeExits) {
      return res.status(400).json({
        message: `Has This Area ${data.store.area}`,
      });
    }

    const userExits: IUser | null = await userService.getUserByUsername(
      data.user.username
    );
    if (userExits) {
      return res.status(400).json({
        message: `There is already a user named ${userExits.username}.`,
      });
    }

    data.user.password = await bcrypt.hash(data.user.password!, 10);
    data.user.role = Role.USER;
    data.user.party = user.id!;
    const userCreate = await userService.createUser({
      ...data.user,
      hashPassword: data.user.password,
    });

    if (!userCreate) {
      return res.status(500).json({ message: "Fail to createUser" });
    }

    data.store.party = user.id!;
    data.store.userId = userCreate.id!;
    const store = await storeService.createStore({ ...data.store });
    if (!store) {
      return res.status(500).json({ message: "Fail to createStore" });
    }
    return res.status(201).json({ message: "Create success" });
  } catch (error) {
    return res.status(500).json({ message: "Fail to create" });
  }
};

const updateStore = async (req: RequestAndUser, res: Response) => {
  try {
    const data: IRequestUpdateStore = req.body;

    if (!Object.values(Area).includes(data.area)) {
      return res.status(400).json({
        message: `Have not Area ${data.area}`,
      });
    }
    if (!Object.values(RentalType).includes(data.rentalType)) {
      return res.status(400).json({
        message: `Have not rentalType ${data.rentalType}`,
      });
    }

    const store = await storeService.updateStore(data);
    if (!store) {
      return res.status(500).json({ message: "Fail to UpdateStore" });
    }
    return res.status(201).json({ message: "Update success" });
  } catch (error) {
    return res.status(500).json({ message: "Fail to create" });
  }
};

const deleteStore = async (req: RequestAndUser, res: Response) => {
  try {
    const { id } = req.body;
    const store: IStore | null = await storeService.getStoreById(id);
    if (!store) {
      return res.status(400).json({ message: "Store not found" });
    }
    await storeService.deleteStore(store.id);
    await userService.deleteUser(store.userId);
    return res.status(201).json({ message: "Delete success" });
  } catch (error) {
    return res.status(500).json({ message: "Fail to create" });
  }
};

const getStoreParty = async (req: RequestAndUser, res: Response) => {
  const { id, role, party } = req.user!;
  if (role !== "admin") {
    const store: IStore | null = await storeService.getStoreByUserId(id!);
    if (!store) {
      return res.status(400).json({ message: "Store not found" });
    }
    return res.status(200).json(store);
  } else {
    const stores: IStore[] | null = await storeService.getStoresParty(party!);
    if (!stores) {
      return res.status(400).json({ message: "Store not found" });
    }
    return res.status(200).json(stores);
  }
};

const getAreaStoreParty = async (req: RequestAndUser, res: Response) => {
  const { party } = req.user!;
  const areas: Area[] | null = await storeService.getAreaStoresParty(party!);
  if (!areas) {
    return res.status(400).json({ message: "Store not found" });
  }
  return res.status(200).json(areas);
};

export default {
  createStore,
  updateStore,
  deleteStore,
  getStoreParty,
  getAreaStoreParty,
};
