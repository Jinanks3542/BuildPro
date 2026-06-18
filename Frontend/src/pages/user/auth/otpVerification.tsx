import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import BaseAuthLayout from "../../../layouts/baseAuthLayout";
import OtpForm from "../../../components/auth/otpForm";
import { verifyOtpService, resendOtpService } from "../../../services/auth.service";
import { useEffect } from "react";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import { useAppDispatch } from "../../../store/hooks";


export default function OtpVerificationPage(){
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()


    const {email, role} = location.state as {
        email: string;
        role: "user"|"vendor";
    }

    useEffect(()=>{
        if(!email || !role) navigate("/signup")
    },[email, role, navigate])


    const handleVerify = async (otp: string): Promise<void> => {
        try {
            const result = await verifyOtpService(dispatch, email, otp, role)
            toast.success("Email verified! Welcome to BuildPro")
            navigate(result.nextRoute)
        } catch (error) {
            toast.error(getApiErrorMessage(error))
            throw error
        }
    }

    const handleResend = async (): Promise<void> => {
    try {
      await resendOtpService(email, role);
      toast.success("New OTP sent to your email");
    } catch (error) {
      toast.error(getApiErrorMessage(error));
      throw error;
    }
  };

  if(!email || !role) return null

  return (
    <BaseAuthLayout>
      <OtpForm
        email={email}
        onVerify={handleVerify}
        onResend={handleResend}
      />
    </BaseAuthLayout>
  )
}