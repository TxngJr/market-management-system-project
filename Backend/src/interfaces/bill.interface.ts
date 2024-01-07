export interface IBill {
  id: number;
  status: Status;
  rentPrice: number;
  WaterPriceUnit: number;
  electricityPriceUnit: number;
  waterBill: number;
  electricityBill: number;
  waterUnit: number;
  electricityUnit: number;
  landId: number;
  storeId: number;
  createAt: Date;
}

const enum Status {
  SUCCESS = "success",
  PENDING = "pending",
}
