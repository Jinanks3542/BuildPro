import { redis } from "../config/redis.config";
import { generateOtp } from "../utils/otp";

const OTP_EXPIRY = 300

class OtpService{
    async generateAndStoreOtp(
        email: string
    ): Promise<string>{
        const otp = generateOtp(6)

        await redis.set(
            `otp:${email}`,
            otp,
            "EX",
            OTP_EXPIRY
        )

        return otp
    }

    async verifyOtp(
        email: string,
        enteredOtp: string
    ): Promise<boolean>{

        const storedOtp = await redis.get(
            `otp:${email}`
        )

        if (!storedOtp) {
            return false
        }

        return storedOtp === enteredOtp
    }


    async deleteOtp (
        email: string
    ): Promise<void> {
        await redis.del(
            `otp:${email}`
        );
    }


    async resendOtp(
        email: string
    ): Promise<string>{

        const otp = generateOtp(6)
        await redis.set(
            `otp:${email}`,
            otp,
            "EX",
            OTP_EXPIRY
        )

        return otp
    }
}

export default new OtpService()