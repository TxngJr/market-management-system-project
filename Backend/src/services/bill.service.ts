import { IBill } from "../interfaces/bill.interface";
import { Bill } from "../models/bill.model";

const createBill = async (data: IBill) => {
  return await Bill.create({ data });
};

const getBills = async (party: number) => {
  return await Bill.findAll({
    where: {
      party,
    },
  });
};

const getBillById = async (id: number) => {
  return await Bill.findByPk(id);
};

const getBillByUsername = async (username: string) => {
  return await Bill.findOne({ where: { username } });
};

const updateBill = async (id: number, data: IBill) => {
  return await Bill.update({ data }, { where: { id } });
};

const deleteBill = async (id: number) => {
  return await Bill.destroy({ where: { id } });
};

export default {
  createBill,
  getBills,
  getBillById,
  getBillByUsername,
  updateBill,
  deleteBill,
};
