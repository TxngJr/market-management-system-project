export interface IUser {
  id: number;
  username: string;
  role: Role;
  party?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IRegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
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

