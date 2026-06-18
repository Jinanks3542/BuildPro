import type {z} from 'zod'
import type {
     UserData,
     VendorData,
     AdminData 
} from '../interfaces/services/authServiceInterface'
import type {
    signupSchemaUser,
    otpSchema,
    emailSchema,
    loginSchema

} from '../schemas/authSchema'


export type SignupUserRequestDTO = z.infer<typeof signupSchemaUser>
export type OtpRequestDTO = z.infer<typeof otpSchema>
export type ResendOtpRequestDTO = z.infer<typeof emailSchema>
export type LoginRequestDTO = z.infer<typeof loginSchema>

export interface SignupResponseDTO {
    userId: string;
    email: string;
}

export interface OtpVerificationResponseDTO {
    success: boolean
}

export interface LoginResponseDTO{
    accessToken: string;
    refreshToken: string;
    user: UserData | VendorData | AdminData
}