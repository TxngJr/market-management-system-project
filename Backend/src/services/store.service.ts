import { IStore } from "../interfaces/store.interface";
import { Store } from "../models/store.model";

const createStore = async (data: IStore) => {
  return await Store.create({ data });
};

const getStores = async (party: number) => {
  return await Store.findAll({
    where: {
      party,
    },
  });
};

const getStoreById = async (id: number) => {
  return await Store.findByPk(id);
};

const getStoreByUsername = async (username: string) => {
  return await Store.findOne({ where: { username } });
};

const updateStore = async (id: number, data: IStore) => {
  return await Store.update({ data }, { where: { id } });
};

const deleteStore = async (id: number) => {
  return await Store.destroy({ where: { id } });
};

export default {
  createStore,
  getStores,
  getStoreById,
  getStoreByUsername,
  updateStore,
  deleteStore,
};
