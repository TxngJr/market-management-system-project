import { IRegisterApiRequest } from './user.interface';

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
  rentalType: RentalType;
  party: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IStoreFormRegister {
  imagePath: string;
  storeName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  area: Area;
  rentalType: RentalType;
}

export interface IStoreCreateApiRequest {
  store: IStoreFormRegister;
  user: IRegisterApiRequest;
}

export interface IStoreUpdateFormAndApiRequest {
  id: number;
  imagePath: string;
  storeName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  area: Area;
  rentalType: RentalType;
}

export interface IStoreGetPartyApiResponse {
  id: number;
  imagePath: string;
  storeName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  area: Area;
  rentalType: RentalType;
}


export enum RentalType {
  MONTH = "month",
  YEAR = "year",
}

export enum Area {
  A1 = 'a1',
  A2 = 'a2',
  A3 = 'a3',
  A4 = 'a4',
  A5 = 'a5',

  B1 = 'b1',
  B2 = 'b2',
  B3 = 'b3',
  B4 = 'b4',
  B5 = 'b5',
  B6 = 'b6',
  B7 = 'b7',
  B8 = 'b8',

  C1 = 'c1',
  C2 = 'c2',
  C3 = 'c3',
  C4 = 'c4',
  C5 = 'c5',
  C6 = 'c6',
  C7 = 'c7',
  C8 = 'c8',

  D1 = 'd1',
  D2 = 'd2',
  D3 = 'd3',
  D4 = 'd4',
  D5 = 'd5',
  D6 = 'd6',
  D7 = 'd7',
  D8 = 'd8',

  E1 = 'e1',
  E2 = 'e2',
  E3 = 'e3',
  E4 = 'e4',
  E5 = 'e5',
  E6 = 'e6',
  E7 = 'e7',
  E8 = 'e8',

  F1 = 'f1',
  F2 = 'f2',
  F3 = 'f3',
  F4 = 'f4',
  F5 = 'f5',
}

export const areaSelect = [
  { value: Area.A1 }, { value: Area.A2 }, { value: Area.A3 }, { value: Area.A4 }, { value: Area.A5 },
  { value: Area.B1 }, { value: Area.B2 }, { value: Area.B3 }, { value: Area.B4 }, { value: Area.B5 },
  { value: Area.B6 }, { value: Area.B7 }, { value: Area.B8 }, { value: Area.C1 }, { value: Area.C2 },
  { value: Area.C3 }, { value: Area.C4 }, { value: Area.C5 }, { value: Area.C6 }, { value: Area.C7 },
  { value: Area.C8 }, { value: Area.D1 }, { value: Area.D2 }, { value: Area.D3 }, { value: Area.D4 },
  { value: Area.D5 }, { value: Area.D6 }, { value: Area.D7 }, { value: Area.D8 }, { value: Area.E1 },
  { value: Area.E2 }, { value: Area.E3 }, { value: Area.E4 }, { value: Area.E5 }, { value: Area.E6 },
  { value: Area.E7 }, { value: Area.E8 }, { value: Area.F1 }, { value: Area.F2 }, { value: Area.F3 },
  { value: Area.F4 }, { value: Area.F5 },
]

export const areaA = [{ value: Area.A1 }, { value: Area.A2 }, { value: Area.A3 }, { value: Area.A4 }, { value: Area.A5 },]
export const areaB = [{ value: Area.B1 }, { value: Area.B2 }, { value: Area.B3 }, { value: Area.B4 }, { value: Area.B5 }, { value: Area.B6 }, { value: Area.B7 }, { value: Area.B8 }]
export const areaC = [{ value: Area.C1 }, { value: Area.C2 }, { value: Area.C3 }, { value: Area.C4 }, { value: Area.C5 }, { value: Area.C6 }, { value: Area.C7 }, { value: Area.C8 }]
export const areaD = [{ value: Area.D1 }, { value: Area.D2 }, { value: Area.D3 }, { value: Area.D4 }, { value: Area.D5 }, { value: Area.D6 }, { value: Area.D7 }, { value: Area.D8 }]
export const areaE = [{ value: Area.E1 }, { value: Area.E2 }, { value: Area.E3 }, { value: Area.E4 }, { value: Area.E5 }, { value: Area.E6 }, { value: Area.E7 }, { value: Area.E8 }]
export const areaF = [{ value: Area.F1 }, { value: Area.F2 }, { value: Area.F3 }, { value: Area.F4 }, { value: Area.F5 }]