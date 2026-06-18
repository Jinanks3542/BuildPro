import type { AuthProvider } from "../interfaces/common/commonInterface";
import { IUserDocument } from "../interfaces/models/user.interface";
import { IUserRepository } from "../interfaces/repositories/userRepoInterface";
import UserModel from "../models/userModel";
import { BaseRepository } from "./baseRepository";

class UserRepository extends BaseRepository<IUserDocument> implements IUserRepository{
    constructor(){
        super(UserModel)
    }

    async findByEmail(email: string): Promise<IUserDocument | null>{
        return this.findOne({email})
    }

    async verifyEmail(email: string): Promise<boolean>{
        return await this.updateRaw({email}, {isVerified: true, isBlocked: false});
    }

   
}

export default UserRepository