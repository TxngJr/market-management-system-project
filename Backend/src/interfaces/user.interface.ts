import { NextFunction, Request, Response } from "express";

export interface IUser {
  id?: number;
  username: string;
  hashPassword?: string;
  role: Role[];
  party: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserDecodeJwt {
  id: number;
}

export interface RequestAndUser extends Request{
  user?: IUser
}

export interface ResponseAndUser extends Response{
  user?: IUser
}

export interface NextFunctionAndUser extends NextFunction{
  user?: IUser
}

export const enum Role {
  ADMIN = "admin",
  USER = "user",
}
