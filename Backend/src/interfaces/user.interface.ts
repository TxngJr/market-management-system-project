export interface IUser {
  id: number;
  username: string;
  hashPassword: string;
  role: Role[];
  party: number;
  createdAt: Date;
  updatedAt: Date;
}

export const enum Role {
  ADMIN = "admin",
  USER = "user",
}
