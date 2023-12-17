import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import userService from "../services/user.service";
import {
  IUser,
  IUserDecodeJwt,
  NextFunctionAndUser,
  RequestAndUser,
  ResponseAndUser,
} from "../interfaces/user.interface";
import dotenv from "dotenv";

dotenv.config();

const authenticateToken = (
  req: RequestAndUser,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET!,
    async (
      err: jwt.VerifyErrors | null,
      decode: IUserDecodeJwt | any
    ): Promise<NextFunctionAndUser | ResponseAndUser | any> => {
      if (err) {
        return res.status(403).json({ message: "Token is expired" });
      }
      const user: IUser | null = await userService.getUserById(decode.id);
      if (!user) {
        return res.status(403).json({ message: "User Not Found" });
      }
      delete user.hashPassword;
      req.user = user;
      next();
    }
  );
};

export default { authenticateToken };
