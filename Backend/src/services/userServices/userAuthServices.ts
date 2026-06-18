import { Users, type NonAdminRole } from '../../enums/common.enums'
import { Messages } from '../../enums/messages'
import { StatusCode } from '../../enums/statusCode'
import { CustomError } from '../../errors/CustomError'
import OtpServices from '../otpServices'

// import { generateOtp } from '../../utils/otp'
import type { AuthRole } from '../../interfaces/common/commonInterface'
import type {
    AuthEntity,
    AdminData,
    AuthPayload,
    IAuthService,
    VendorData,
    UserData,
} from '../../interfaces/services/authServiceInterface' 


import type {
    SignupUserRequestDTO,
    SignupResponseDTO,
    OtpRequestDTO,
    OtpVerificationResponseDTO,
    ResendOtpRequestDTO,
    LoginRequestDTO,
    LoginResponseDTO,
} from '../../dto/authDto'
import { IUserRepository } from '../../interfaces/repositories/userRepoInterface'
import { hashPassword } from '../../utils/password'
import { comparePassword } from '../../utils/password'
import { sendOtpMail } from '../../utils/mailer'
import { 
    generateAccessToken,
    generateRefreshToken

 } from '../../utils/jwt'
import { IAdminRepository } from '../../interfaces/repositories/adminRepository'

class AuthService implements IAuthService{
    constructor(
        private _userRepo: IUserRepository,
        private _adminRepo: IAdminRepository
    ){}



    async loginUser(data: LoginRequestDTO): Promise<LoginResponseDTO> {
        const user = await this._userRepo.findByEmail(data.email)

        if(!user){
            throw new CustomError(Messages.auth.error.invalidCredentials, StatusCode.UNAUTHORIZED)
        }

        const isPasswordMatch = await comparePassword(
            data.password,
            user.password 
        )

        if(!isPasswordMatch){
            throw new CustomError(
                Messages.auth.error.invalidCredentials,
                StatusCode.UNAUTHORIZED
            )
        }

        if(!user.isVerified){
            throw new CustomError(
                Messages.auth.error.emailNotVerified,
                StatusCode.BAD_REQUEST
            )
        }

        if(user.isBlocked){
            throw new CustomError(
                Messages.auth.error.accountBlocked,
                StatusCode.FORBIDDEN
            )
        }

        const accessToken = generateAccessToken({
            sub: user._id.toString(),
            role: "user"
        })

        const refreshToken = generateRefreshToken({
            sub: user._id.toString(),
            role:"user"
        })

        return {
            accessToken,
            refreshToken,
            user: {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: "user",
                isVerified: user.isVerified
            }
        }
    }



    async signupUser(data: SignupUserRequestDTO): Promise<SignupResponseDTO>{
        const exists = await this._userRepo.findByEmail(data.email)
        if(exists){
            throw new CustomError(Messages.auth.error.emailAlreadyRegistered, StatusCode.CONFLICT)
        }
        const password = await hashPassword(data.password)
        
        const user = await this._userRepo.create({
            ...data,
            providers:['local'],
            password,
            isVerified: false,

        })

        const otp = await OtpServices.generateAndStoreOtp(
            user.email
        )

        console.log("Otp get:", otp)

        await sendOtpMail(
            user.email,
            otp
        )

        return {
            userId: user._id.toString(),    
            email: user.email
        }
    }



async verifyUserOtp(data:OtpRequestDTO): Promise<OtpVerificationResponseDTO>{
    const user = await this._userRepo.findByEmail(
        data.email
    );
    if(!user) {
        throw new CustomError(Messages.auth.error.userNotFound, StatusCode.CONFLICT)
    }
    const isValid = await OtpServices.verifyOtp(
        data.email,
        data.otp
    )
    
    if(!isValid){
        throw new CustomError(Messages.auth.error.otpInvalid, StatusCode.BAD_REQUEST)
    }

    await this._userRepo.verifyEmail(
        data.email
    );

    await OtpServices.deleteOtp(
        data.email
    )

    return {
        success: true
    }
}


async resendUserOtp(data: ResendOtpRequestDTO): Promise<void> {
    const user = await this._userRepo.findByEmail(
        data.email
    )

    if(!user){
        throw  new CustomError(Messages.auth.error.userNotFound, StatusCode.NOT_FOUND)
    }

    const otp = await OtpServices.resendOtp(
        data.email
    )

    console.log("resend OTP:", otp);
    
    await sendOtpMail(
        data.email,
        otp
    )
}

async loginAdmin(data: LoginRequestDTO): Promise<LoginResponseDTO>{
    const {email, password} = data

    const admin = await this._adminRepo.findByEmail(email)

    if(!admin){
        throw new CustomError(Messages.auth.error.invalidCredentials, StatusCode.UNAUTHORIZED)
    }

    const valid = await comparePassword(password, admin.password)

    if(!valid){
        throw new CustomError(
            Messages.auth.error.invalidCredentials, StatusCode.UNAUTHORIZED
        )
    }

    const accessToken = generateAccessToken({sub:admin._id.toString(), role:"admin"})
    const refreshToken = generateRefreshToken({sub: admin._id.toString(), role:"admin"})

    return {
        accessToken,
        refreshToken,
        user:{
            id: admin._id.toString(),
            email: admin.email,
            role: "admin",
        }
    }
}

}







export default AuthService













