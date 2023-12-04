export interface IStore {
  id: number;
  userId: number;
  imagePath: string;
  storeName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  area: Area;
  party: number;
  createdAt: Date;
  updatedAt: Date;
}

const enum Area {
  A = "a",
  B = "b",
  C = "c",
  D = "d",
  E = "e",
  F = "f",
}
