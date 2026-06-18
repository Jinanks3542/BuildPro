import jwt, { type JwtPayload } from "jsonwebtoken"
import { env } from "../config/env.config" 
import { CustomError } from "../errors/CustomError"

export interface TokenPayload extends JwtPayload{
    sub: string,
    role: "admin" | "user" | "vendor"
}

export const generateAccessToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET!, {
    expiresIn: '15m',
  });
};

export const generateRefreshToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET!, {
    expiresIn: '7d',
  });
};

export const verifyRefreshToken = (token: string): TokenPayload =>{
    try {
        const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET!) as TokenPayload;

        if(!decoded.sub || !decoded['role']){
            throw new Error("invalid token payload")
        }

        return {
            sub:decoded.sub,
            role:decoded["role"],
        }
    } catch {
        throw new CustomError("invalid or expired refresh token", 401)
    }
}