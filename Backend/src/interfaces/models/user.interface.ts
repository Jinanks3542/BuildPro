import {Document, Types} from 'mongoose'
import type { AuthProvider } from '../common/commonInterface';


export interface IUserDocument extends Document{
    _id: Types.ObjectId;
    name:string;
    email:string;
    password:string;
    phone?: string;
    profilePicture?: string;
    isBlocked: boolean;
    isVerified: boolean;
    providers: AuthProvider[]

    createdAt: Date;
    updatedAt: Date;
}