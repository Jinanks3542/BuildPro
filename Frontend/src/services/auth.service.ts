import type { AppDispatch } from "../store/store"; 
import { setAuth } from "../store/slices/authSlice";

import {
     signupUserApi, 
     verifyUserOtpApi,
     verifyVendorOtpApi,
     resendUserOtpApi,
     resendVendorOtpApi,
     loginUserApi,

    } from "./api/auth.api";
import type { UserSignupRequest } from "./interface/authApi.interface";

import type {
     UserRole,
     AuthUserData,
     AuthVendorData,
     LoginRequest,
     LoginValues
     } from "../types/auth.types";



export const signupUSerService = async (data: UserSignupRequest) =>{
    const res = await signupUserApi(data)

    return{
        nextRoute: "/verifyOtp",
        email: res.email,
    }
}

export const loginUserService = async (
    dispatch: AppDispatch,
    data: LoginRequest
) =>{
    const authData = await loginUserApi(data)
    dispatch(
        setAuth({
            accessToken: authData.accessToken,
            role: authData.user.role,
        })
    )

    return {
        nextRoute: "/"
    }
}



export const verifyOtpService = async (
    dispatch: AppDispatch,
    email: string,
    otp: string,
    role:"user"|"vendor"
)=>{
    if(role==="user"){
        await verifyUserOtpApi({
            email,
            otp
        })
    }else{
        await verifyVendorOtpApi({
            email,
            otp,
        })
    }
    return {
        nextRoute: "/login"
    }
    }


export const resendOtpService = async(
    email: string,
    role: "user" | "vendor"
): Promise<void> =>{
    if(role === "user"){
        await resendUserOtpApi(email)
    }else{
        await resendVendorOtpApi(email)
    }
}
