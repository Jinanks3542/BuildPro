import type { Request, Response,NextFunction } from "express";
import { env } from "../../config/env.config"
import type { IAuthService } from "../../interfaces/services/authServiceInterface";
import { sendResponse } from "../../utils/httpResponse";
import { StatusCode } from "../../enums/statusCode";
import { Messages } from "../../enums/messages";

class authController{
    constructor(private readonly _authService:IAuthService) {}

    loginUser = async(req:Request, res:Response, next:NextFunction)=>{
        try {
            const result = await this._authService.loginUser(req.body)
            const {refreshToken, ...safeData} = result
            this.setRefreshCookie(res,refreshToken)

            sendResponse(res, StatusCode.CREATED,{
                success: true,
                message: Messages.auth.success.loginSuccess,
                data: safeData,
            }

            )
        } catch (error) {
            next(error)
        }
    }

    loginAdmin = async(req: Request, res: Response, next:NextFunction)=>{
        try {
            const result = await this._authService.loginAdmin(req.body)
            const {refreshToken, ...safeData} = result
            this.setRefreshCookie(res,refreshToken)

            sendResponse(res, StatusCode.OK,{
                success:true,
                message: Messages.auth.success.loginSuccess,
                data: safeData
            })
        } catch (error) {
            next(error)
        }
    }


    signupUser = async(req:Request, res:Response, next:NextFunction)=>{
        try {
            const result = await this._authService.signupUser(req.body);
            sendResponse(res, StatusCode.CREATED, {
              success: true,
              message:Messages.auth.success.signupSuccess,
              data: result,
            })


        } catch (error) {
            next(error)
        }
    }

    verifyUserOtp = async (req:Request, res:Response, next:NextFunction)=>{
        try {
            const result = await this._authService.verifyUserOtp(req.body)
            sendResponse(res, StatusCode.CREATED,{
                success:true,
                message:Messages.auth.success.emailVerified,
                data:result,
            })
        } catch (error) {
            next(error)
        }
    }

    resendUserOtp = async(req:Request, res:Response, next:NextFunction)=>{
        try {
            const result = await this._authService.resendUserOtp(req.body)
            sendResponse(res, StatusCode.CREATED,{
                success:true,
                message:Messages.auth.success.otpResend,
                data:result,
            })
        } catch (error) {
            next(error)
        }
    }


    private setRefreshCookie(
    res: Response,
    token: string
) {
    res.cookie(
        "refresh_token",
        token,
        {
            httpOnly: true,
            secure: env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        }
    );
}
}

export default authController