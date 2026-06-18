import { Routes, Route} from "react-router-dom"
import UserSignupPage from "../pages/user/auth/Signup"
import OtpVerificationPage from "../pages/user/auth/otpVerification"
import LoginPage from "../pages/user/auth/Login"
// import UserHomePage from "../pages/user/userHomePage"

export default function UserRoutes(){
    return (
        <Routes>
            {/* <Route path="/" element={<UserHomePage/>}/> */}
            <Route path="Signup" element={<UserSignupPage/>}/>
            <Route path="verifyOtp" element={<OtpVerificationPage/>}/>
            <Route path="login" element={<LoginPage />} />
            

        </Routes>
    )
}



