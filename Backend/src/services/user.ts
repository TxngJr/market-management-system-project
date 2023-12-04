// user.service.ts

import {User} from "../models/user";

// CRUD operations

const createUser = async (data: any) => {
  return await User.create( data ); 
};

const getUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id: number) => {
  return await User.findByPk(id);
};

const updateUser = async (id: number, username: string) => {
  return await User.update({ username }, { where: { id } }); 
};

const deleteUser = async (id: number) => {
  return await User.destroy({ where: { id } });
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,  
  deleteUser   
}