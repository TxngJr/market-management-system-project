export interface IUser {
  id: number;
  imagePath?: string;
  firstName: string;
  lastName: string;
  username: string;
  hashPassword?: string;
  email: string;
  address: string;
  phoneNumber: string;
  isOwner: boolean;
  landId: number | null;
  storeId: number | null;
  createAt: Date;
}

export interface IRegisterForm {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  address: string;
  phoneNumber: string;
}

export interface IRegisterApiRequest {
  username: string;
  password: string;
}

export interface IRegisterApiResponse {
  message?: string;
}

export interface ILoginForm {
  username: string;
  password: string;
}

export interface ILoginApiRequest {
  username: string;
  password: string;
}

export interface ILoginApiResponse {
  token?: string;
  message?: string;
}

export interface IUserApiResponse extends IUser {
  message?: string;
}

export const enum Role {
  ADMIN = 'admin',
  USER = 'user',
}
