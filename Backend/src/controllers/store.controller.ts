import { Response } from "express";
import userService from "../services/user.service";
import storeService from "../services/store.service";
import { IUser, RequestAndUser, Role } from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import {
  Area,
  IRequestCreateStore,
  IRequestDeleteStore,
  IRequestUpdateStore,
  IStore,
} from "../interfaces/store.interface";

dotenv.config();

const createStore = async (req: RequestAndUser, res: Response) => {
  try {
    const user: IUser = req.user!;
    if (user.role == "user") {
      return res.status(400).json({ message: "You are not admin" });
    }
    const data: IRequestCreateStore = req.body;

    if (!Object.values(Area).includes(data.store.area)) {
      return res.status(400).json({
        message: `Have not Area ${data.store.area}`,
      });
    }

    const storeExits: IStore | null =
      await storeService.checkAreaStoreExistsParty(data.store.area, user.id!);
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
    const user: IUser = req.user!;

    const data: IRequestUpdateStore = req.body;
    // const storeExits: IStore | null =
    //   await storeService.checkAreaStoreExistsParty(data.area, user.id!);

    // if (storeExits?.area != data.area) {
    //   return res.status(400).json({
    //     message: `Has This Area ${data.area}`,
    //   });
    // }

    const storeCheck: IStore | null = await storeService.getStoreById(data.id);
    if (user.id != storeCheck?.party && user.id != storeCheck?.userId) {
      return res.status(400).json({
        message: `You can't edit this store`,
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
    const user: IUser = req.user!;

    const data: IRequestDeleteStore = req.body;

    const storeDelete: IStore | null = await storeService.deleteStore(data.id);
    console.log(storeDelete);
    // if (user.id != storeCheck?.party && user.id != storeCheck?.userId) {
    //   return res.status(400).json({
    //     message: `You can't edit this store`,
    //   });
    // }

    // const store = await storeService.updateStore(data);
    // if (!store) {
    //   return res.status(500).json({ message: "Fail to UpdateStore" });
    // }
    return res.status(201).json({ message: "Update success" });
  } catch (error) {
    return res.status(500).json({ message: "Fail to create" });
  }
};

const getStoreParty = async (req: RequestAndUser, res: Response) => {
  const user: IUser = req.user!;
  if (user!.role == "admin") {
    user!.party = user!.id;
  }
  const store = await storeService.getStoresParty(user.party!);
  return res.status(200).json(store);
};

export default {
  createStore,
  updateStore,
  deleteStore,
  getStoreParty,
};
