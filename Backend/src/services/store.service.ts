import { IStore } from "../interfaces/store.interface";
import { Store } from "../models/store.model";

const createStore = async (data: IStore | any): Promise<IStore | null> => {
  try {
    const store: any = await Store.create(data);
    return store.dataValues as IStore;
  } catch (error) {
    return null;
  }
};

const getStores = async (party: number): Promise<IStore[] | null> => {
  try {
    const stores: any = await Store.findAll({
      where: {
        party,
      },
    });
    return stores.map((store: any) => store.dataValues) as IStore[];
  } catch (error) {
    return null;
  }
};

const getStoreById = async (id: number): Promise<IStore | null> => {
  try {
    const user: any = await Store.findByPk(id);
    return user.dataValues as IStore;
  } catch (error) {
    return null;
  }
};

const getStoreByUsername = async (storeName: string): Promise<IStore | null> => {
  try {
    const store: any = await Store.findOne({ where: { storeName } });
    return store.dataValues as IStore;
  } catch (error) {
    return null;
  }
};

const updateStore = async (
  id: number,
  data: IStore
): Promise<IStore | null> => {
  try {
    const store: any = await Store.update(data, { where: { id } });
    return store.dataValues as IStore;
  } catch (error) {
    return null;
  }
};

const deleteStore = async (id: number): Promise<IStore | null> => {
  try {
    const store: any = await Store.destroy({ where: { id } });
    return store.dataValues as IStore;
  } catch (error) {
    return null;
  }
};

export default {
  createStore,
  getStores,
  getStoreById,
  getStoreByUsername,
  updateStore,
  deleteStore,
};
