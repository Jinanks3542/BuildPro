import {Document, Types} from 'mongoose'


export interface UserDocument extends Document{
    _id: Types.ObjectId;
    name:string;
    email:string;
    password:string;
    username: string;
    phone?: string;
    profilePicture?: string;
    isBlocked: boolean;
    isVerified: boolean;

    createdAt: Date;
    updatedAt: Date;
}