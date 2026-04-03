import mongoose, {Schema, Document} from "mongoose";
import type {UserDocument} from '../interfaces/models/user.interface.ts'

const UserSchema = new Schema<UserDocument>(
    {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
    },

    phone: {
      type: String,
      default: null,
    },

    profilePicture: {
      type: String,
      default: null,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    },
    { timestamps: true },
)

const UserModel = mongoose.model<UserDocument>('User', UserSchema);
export default UserModel;