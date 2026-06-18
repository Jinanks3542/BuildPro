import http from "../axiosInstance";
import type { ApiResponse } from "../../types/apiResponse";

import type { 
    AuthResponse,

 } from "../../types/auth.types";

 import type { 
    UserSignupRequest,
    SignupResponse,
    VerifyOtpRequest,
    vendorSignupRequest,
    LoginRequest,
    LoginData,

  } from "../interface/authApi.interface";



export const signupUserApi = async(
    data: UserSignupRequest
): Promise<SignupResponse> => {
    const res = await http.post<ApiResponse<SignupResponse>>(
        "/user/signup",
        data
    );
    if (!res.data.data) throw new Error(res.data.message)
    return res.data.data
}



export const loginUserApi = async(
  data: LoginRequest
): Promise<LoginData> =>{
  const res = await http.post<ApiResponse<LoginData>>(
    "/user/login",
    data
  );
  if(!res.data.data) throw new Error(res.data.message)
    return res.data.data
}



export const verifyUserOtpApi = (data: VerifyOtpRequest) =>
  http.post<ApiResponse<AuthResponse>>("/user/verifyOtp", data);


export const resendUserOtpApi = async (email: string): Promise<void> => {
  await http.post("/user/resendOtp", { email });
};


export const signupVendorApi = async(
    data:vendorSignupRequest
):Promise<SignupResponse> =>{
    const res = await http.post<ApiResponse<SignupResponse>>(
        "/vendor/signup",
        data
    )
    if(!res.data.data) throw new Error (res.data.message)
    return res.data.data    
}



export const verifyVendorOtpApi = (data: VerifyOtpRequest) =>
  http.post<ApiResponse<AuthResponse>>("/vendor/verifyOtp", data);



export const resendVendorOtpApi = async (email: string): Promise<void> => {
  await http.post("/vendor/resendOtp", { email }); 
};


