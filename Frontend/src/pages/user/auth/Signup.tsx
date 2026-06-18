import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BaseAuthLayout from "../../../layouts/baseAuthLayout";
import UserSignupForm from "../../../components/auth/userSignupForm";
import { signupUSerService } from "../../../services/auth.service";
import { getApiErrorMessage } from "../../../utils/getApiErrorMessage";
import type { UserSignupRequest } from "../../../types/auth.types";


export default function UserSignupPage(){
  const navigate = useNavigate()

  const handleSignup = async (data: UserSignupRequest) =>{
    try {
      const result = await  signupUSerService(data)
      toast.success("Account created! please verify your email")
      navigate(result.nextRoute,{
        state: {email: result.email, 
          role: "user"
        }
      })
    } catch (error) {
      toast.error(getApiErrorMessage(error))
    }
  }

  return (
    <BaseAuthLayout>
    <UserSignupForm onSubmit ={handleSignup} />
    </BaseAuthLayout>
  )
}