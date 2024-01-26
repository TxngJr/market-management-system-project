import { Response } from "express";
import { IUser, RequestAndUser } from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { Area, IStore } from "../interfaces/store.interface";
import { User } from "../models/user.model";
import { Model, Op, where } from "sequelize";
import { Store } from "../models/store.model";

dotenv.config();

const createStoreAndUser = async (
  req: RequestAndUser,
  res: Response
) => {
  try {
    const user = req.user!;
    const {
      //user
      firstName,
      lastName,
      username,
      password,
      email,
      address,
      phoneNumber,
      //store
      imagePath,
      name,
      area,
      details,
    }: {
      //user
      firstName: string;
      lastName: string;
      username: string;
      password: string;
      email: string;
      address: string;
      phoneNumber: string;
      //store
      imagePath?: string;
      name: string;
      area: Area;
      details?: string;
    } = req.body;

    if (!Object.values(Area).includes(area)) {
      return res.status(400).json({
        message: `Have not Area ${area}`,
      });
    }

    const findAreaOfStore: Model<IStore> | null = await Store.findOne({
      where: { landId: user.landId, area },
    });

    if (findAreaOfStore) {
      return res.status(400).json({
        message: `There is already a store in ${area}.`,
      });
    }

    const exitUser: Model<IUser> | null = await User.findOne({
      where: { username },
    });
    if (exitUser) {
      return res.status(400).json({
        message: `There is already a user named ${username}.`,
      });
    }
    const hashPassword: string = await bcrypt.hash(password, 10);
    const isOwner: boolean = false;
    const dataUser = {
      firstName,
      lastName,
      username,
      hashPassword,
      email,
      address,
      phoneNumber,
      isOwner,
      landId: user.landId,
    };
    const userCreate: Model<IUser> | null = await User.create({
      ...dataUser,
    });

    if (!userCreate) {
      return res.status(404).json({ message: "Fail to register" });
    }

    const dataStore = {
      imagePath,
      name,
      area,
      details,
      userId: userCreate.dataValues.id,
      landId: user.landId,
    };
    const storeCreate = await Store.create({
      ...dataStore,
    });

    if (!storeCreate) {
      return res.status(404).json({ message: "Fail to register" });
    }

    const updateUser = await User.update(
      { storeId: storeCreate.dataValues.id },
      { where: { id: userCreate.dataValues.id } }
    );

    if (!updateUser) {
      return res.status(404).json({ message: "Fail to register" });
    }

    return res.status(201).json({ message: "Create store and user success" });
  } catch (error: any) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getStore = async (req: RequestAndUser, res: Response) => {
  try {
    const user: IUser = req.user!;
    const findUsersByLand: Model<IUser>[] | null = await Store.findAll({
      where: {
        landId: user.landId,
        id: { [Op.ne]: user.id },
      },
      attributes: { exclude: ["hashPassword"] },
    });
    return res.status(200).json(findUsersByLand);
  } catch (error: any) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getAreaStoreHas = async (req: RequestAndUser, res: Response) => {
  const { landId } = req.user!;
  const areas: Model<Area>[] | null = await Store.findAll({
    where: { landId },
    attributes: ["area"],
  });
  if (!areas) {
    return res.status(400).json({ message: "Store not found" });
  }
  return res.status(200).json(areas);
};

const updateStore = async (req: RequestAndUser, res: Response) => {
  try {
    const {
      id,
      name,
      firstName,
      lastName,
      phoneNumber,
      address,
      area,
      details,
    } = req.body;

    if (!Object.values(Area).includes(area)) {
      return res.status(400).json({
        message: `Have not Area ${area}`,
      });
    }

    const store = await Store.update(
      { name, firstName, lastName, phoneNumber, address, area, details },
      { where: { id: id } }
    );
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
    const store: Model<IStore> | null = await Store.findByPk(id);
    if (!store) {
      return res.status(400).json({ message: "Store not found" });
    }
    await Store.destroy({ where: { id: store.dataValues.id } });
    await User.destroy({ where: { id: store.dataValues.userId } });
    return res.status(201).json({ message: "Delete success" });
  } catch (error) {
    return res.status(500).json({ message: "Fail to create" });
  }
};

export default {
  createStoreAndUser,
  getStore,
  getAreaStoreHas,
  updateStore,
  deleteStore

};
