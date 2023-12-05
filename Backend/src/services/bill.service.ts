import { IBill } from "../interfaces/bill.interface";
import { Bill } from "../models/bill.model";

const createBill = async (data: IBill | any): Promise<IBill | null> => {
  try {
    const bill: any = await Bill.create(data);
    return bill.dataValues as IBill;
  } catch (error) {
    return null;
  }
};

const getBills = async (party: number): Promise<IBill[] | null> => {
  try {
    const bills: any = await Bill.findAll({
      where: {
        party,
      },
    });
    return bills.map((bill: any) => bill.dataValues) as IBill[];
  } catch (error) {
    return null;
  }
};

const getBillById = async (id: number): Promise<IBill | null> => {
  try {
    const bill: any = await Bill.findByPk(id);
    return bill.dataValues as IBill;
  } catch (error) {
    return null;
  }
};

const updateBill = async (id: number, data: IBill): Promise<IBill | null> => {
  try {
    const bill: any = await Bill.update(data, { where: { id } });
    return bill.dataValues as IBill;
  } catch (error) {
    return null;
  }
};

const deleteBill = async (id: number): Promise<IBill | null> => {
  try {
    const bill: any = await Bill.destroy({ where: { id } });
    return bill.dataValues as IBill;
  } catch (error) {
    return null;
  }
};

export default {
  createBill,
  getBills,
  getBillById,
  updateBill,
  deleteBill,
};
