import { transporter } from "../config/nodemailer.config";
import { env } from "../config/env.config";

export const sendOtpMail = async(
    email: string,
    otp: string
): Promise<void> =>{
    await transporter.sendMail({
        from: `"BuildPro" <${env.SMTP_USER}>`,
        to: email,
        subject: "Email verification",
        html:`
          <h2>BuildPro Verification</h2>
          <p>Your OTP is:</p>
          <h1>${otp}</h1>
          <p>This OTP expires in 5 minutes.</p>

        `
        ,
    })
}
