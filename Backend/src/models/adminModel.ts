import { model, Schema} from "mongoose"
import type { IAdminDocument } from "../interfaces/models/admin.interface"

const AdminSchema = new Schema<IAdminDocument>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password:{
            type: String,
            required: true,
        },
    },
    {timestamps: true},
)

export const AdminModel = model<IAdminDocument>("Admin", AdminSchema)