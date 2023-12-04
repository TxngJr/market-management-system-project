import {
  Table,
  Column,
  Model,
  DeletedAt,
  UpdatedAt,
  CreatedAt,
  AllowNull,
  PrimaryKey,
  DataType,
  AutoIncrement,
} from "sequelize-typescript";

@Table
export class User extends Model<any> {
  // @Column
  // @PrimaryKey
  // @AutoIncrement
  // id!: number;

  @PrimaryKey
  @Column
  username!: string;

  @Column
  email!: string;

  @Column
  hashPassword!: string;

  // @CreatedAt
  // creationDate!: Date;

  // @UpdatedAt
  // updatedOn!: Date;
}