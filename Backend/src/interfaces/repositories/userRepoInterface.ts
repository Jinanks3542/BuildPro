import type { QueryFilter } from "mongoose";
import type { IUserDocument } from "../models/user.interface";

interface Options {
  skip?: number;
  limit?: number;
  sort?: Record<string, 1 | -1>;
  select?: string;
}

export interface IUserRepository {
    create(data: Partial<IUserDocument>): Promise<IUserDocument>
    findMany(filter?:QueryFilter<IUserDocument>, Options?: Options): Promise<IUserDocument[]>;
    findById(Id: string): Promise<IUserDocument | null>;
    findByEmail(email: string): Promise<IUserDocument | null>;
    verifyEmail(email: string): Promise<boolean>
    
}