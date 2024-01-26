import { Response } from "express";
import { Model, Op, Sequelize } from "sequelize";
import { IStore } from "../interfaces/store.interface";
import { Store } from "../models/store.model";
import { Bill } from "../models/bill.model";
import { RequestAndUser } from "../interfaces/user.interface";
import { IBill } from "../interfaces/bill.interface";

async function generateBillsForAllStores() {
  try {
    const findStores: Model<IStore>[] | null = await Store.findAll();
    if (!findStores) {
      throw new Error("No stores found.");
    }
    const billsPromises = findStores.map(async (store) => {
      try {
        const bill = await Bill.create({
          landId: store.dataValues.landId,
          storeId: store.dataValues.id,
        });
        if (!bill) {
          throw new Error("Error creating bill.");
        }
      } catch (error: any) {
        throw new Error(
          `Error creating bill for store ${store.dataValues.id}: ${error.message}`
        );
      }
    });
    await Promise.all(billsPromises);
    console.log("Bills generated successfully for all stores.");
  } catch (error) {
    console.error("Error generating bills:", error);
  }
}

const getBillsByOwner = async (req: RequestAndUser, res: Response) => {
  try {
    const { month, year } = req.query;
    const findBillsByLand: Model<IBill>[] | null = await Bill.findAll({
      where: {
        landId: req.user!.landId,
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("MONTH", Sequelize.col("createdAt")),
            Number(month)
          ),
          Sequelize.where(
            Sequelize.fn("YEAR", Sequelize.col("createdAt")),
            Number(year)
          ),
        ],
      },
    });
    return res.status(200).json(findBillsByLand);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getBills = async (req: RequestAndUser, res: Response) => {
  try {
    const user = req.user!;
    const { month, year } = req.query;
    const findBillsByLand: Model<IBill>[] | null = await Bill.findAll({
      where: {
        id: user.id,
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("MONTH", Sequelize.col("createdAt")),
            Number(month)
          ),
          Sequelize.where(
            Sequelize.fn("YEAR", Sequelize.col("createdAt")),
            Number(year)
          ),
        ],
      },
    });
    return res.status(200).json(findBillsByLand);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const updateBill = async (req: RequestAndUser, res: Response) => {
  try {
    const {
      id,
      status,
      rentPrice,
      WaterPriceUnit,
      electricityPriceUnit,
      waterBill,
      electricityBill,
      waterUnit,
      electricityUnit,
    } = req.body;
    const updateBill: any = await Bill.update(
      {
        status,
        rentPrice,
        WaterPriceUnit,
        electricityPriceUnit,
        waterBill,
        electricityBill,
        waterUnit,
        electricityUnit,
      },
      { where: { id: id } }
    );
    if (!updateBill) {
      return res.status(404).json({ message: "Fail to update" });
    }
    return res.status(200).json({ message: "Update success" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default {
  generateBillsForAllStores,
  getBillsByOwner,
  getBills,
  updateBill
};
