import type { ApiResponse } from "../../types/apiResponse";
import type { AuthUser } from "../../types/auth.types";

export interface LoginData {
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
}

export type LoginResponse = ApiResponse<LoginData>


export interface UserSignupRequest{
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface vendorSignupRequest{
    name: string;
    email: string;
    password: string;
    phone: string
}

export interface SignupResponse{
    userId: string;
    email: string;
}
export interface LoginRequest{
    email: string;
    password: string
}

export interface VerifyOtpRequest{
    email: string
    otp: string
}


export interface ForgotPasswordRequest{
    email: string
}

export interface ResetPasswordRequest{
    token: string
    newPassword: string
}