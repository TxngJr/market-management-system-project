import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";

const createUser = async (data:any) => {
  return await User.create( data );
};

const getUsers = async (party: number) => {
  return await User.findAll({
    where: {
      party,
    },
  });
};

const getUserById = async (id: number) => {
  return await User.findByPk(id);
};

const getUserByUsername = async (username: string) => {
  return await User.findOne({ where: { username } });
};

const updateUser = async (id: number, data: IUser) => {
  return await User.update( data , { where: { id } });
};

const deleteUser = async (id: number) => {
  return await User.destroy({ where: { id } });
};

export default {
  createUser,
  getUsers,
  getUserById,
  getUserByUsername,
  updateUser,
  deleteUser,
};
