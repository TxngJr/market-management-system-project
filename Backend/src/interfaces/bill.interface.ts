export interface IBill {
  id: number;
  storeId: number;
  price: number;
  status: Status;
  party: number;
  createdAt: Date;
  updatedAt: Date;
}

const enum Status {
  SUCCESS = "success",
  PENDING = "pending",
}
