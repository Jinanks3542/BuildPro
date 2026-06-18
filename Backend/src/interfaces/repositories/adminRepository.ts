import type { IAdminDocument } from "../models/admin.interface";

export interface IAdminRepository {
    findByEmail(email: string): Promise<IAdminDocument | null>
}