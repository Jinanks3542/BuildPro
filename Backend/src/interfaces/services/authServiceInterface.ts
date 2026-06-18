import type { Types } from "mongoose";
import type {
  LoginRequestDTO,
  LoginResponseDTO,
  OtpRequestDTO,
  OtpVerificationResponseDTO,
  ResendOtpRequestDTO,
  SignupResponseDTO,
  SignupUserRequestDTO,
  
} from '../../dto/authDto'


export interface IAuthService{
    signupUser(data:SignupUserRequestDTO): Promise<SignupResponseDTO>
    verifyUserOtp(data:OtpRequestDTO): Promise<OtpVerificationResponseDTO>
    resendUserOtp(data:ResendOtpRequestDTO): Promise<void>
    loginUser(data:LoginRequestDTO): Promise<LoginResponseDTO>
    loginAdmin(data:LoginRequestDTO): Promise<LoginResponseDTO>
}

export interface AuthEntity{
  _id: Types.ObjectId;
  email: string;
  password?: string;
  providers?: string[];
  isVerified?: boolean;
}

export interface UserData{
  id: string;
  email: string;
  name: string;
  role: 'user';
  isVerified: boolean;
}

export interface VendorData{
  id: string;
  email: string;
  companyName: string;
  role: 'vendor';
  isVerified: boolean;
}

export interface AdminData{
  id: string;
  email: string;
  role: 'admin';
}

export type AuthPayload = UserData | VendorData |AdminData;