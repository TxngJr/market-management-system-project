import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

const createUser = async (data: IUser | any): Promise<IUser | null> => {
  try {
    const user: any = await User.create(data);
    return user.dataValues as IUser;
  } catch (error) {
    return null;
  }
};

const getUsers = async (party: number): Promise<IUser[] | null> => {
  try {
    const users: any = await User.findAll({
      where: {
        party,
      },
    });
    return users.map((user: any) => user.dataValues) as IUser[];
  } catch (error) {
    return null;
  }
};

const getUserById = async (id: number): Promise<IUser | null> => {
  try {
    const user: any = await User.findByPk(id);
    return user.dataValues as IUser;
  } catch (error) {
    return null;
  }
};

const getUserByUsername = async (username: string): Promise<IUser | null> => {
  try {
    const user: any = await User.findOne({ where: { username } });
    return user.dataValues as IUser;
  } catch (error) {
    return null;
  }
};

const updateUser = async (id: number, data: IUser): Promise<IUser | null> => {
  try {
    const user: any = await User.update(data, { where: { id } });
    return user.dataValues as IUser;
  } catch (error) {
    return null;
  }
};

const deleteUser = async (id: number): Promise<IUser | null> => {
  try {
    const user: any = await User.destroy({ where: { id } });
    return user.dataValues as IUser;
  } catch (error) {
    return null;
  }
};

export default {
  createUser,
  getUsers,
  getUserById,
  getUserByUsername,
  updateUser,
  deleteUser,
};
