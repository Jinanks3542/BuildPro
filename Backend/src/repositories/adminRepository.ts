import type { IAdminDocument } from "../interfaces/models/admin.interface";
import type { IAdminRepository } from "../interfaces/repositories/adminRepository";

import { AdminModel } from "../models/adminModel";
import { BaseRepository } from "./baseRepository";


class AdminRepository extends BaseRepository<IAdminDocument> implements IAdminRepository {
    constructor(){
        super(AdminModel)
    }

     findByEmail(email: string): Promise<IAdminDocument | null> {
        return this.findOne({email})
    }
}

export default AdminRepository