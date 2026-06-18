import {useState, useRef, useEffect} from "react"

import { array } from "yup";

interface UseOtpInputProps{
    length?: number;
    resendTimeout?: number;
    onVerify: (otp: string) => Promise<void> 
    onResend?: () => Promise<void> 
}

interface UseOtpInputReturn{
    otp: string[];
    timer: number;
    loading: boolean;
    resending: boolean;
    apiError: string;
    inputsRef: React.RefObject<(HTMLInputElement | null)[]>;
    handleChange: (value: string, index:number) =>void;
    handleKeyDown: (e: React.KeyboardEvent, index: number)=> void;
    handlePaste: (e: React.ClipboardEvent) => void
    handleVerify: () => Promise<void>
    handleResend: () =>Promise<void>
}

export const useOtpInput = ({
    length = 6,
    resendTimeout = 60,
    onVerify,
    onResend,
}: UseOtpInputProps): UseOtpInputReturn =>{
    
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const [timer, setTimer] = useState<number>(resendTimeout);
    const [loading, setLoading] = useState<boolean>(false);
    const [resending, setResending] = useState<boolean>(false);
    const [apiError,setApiError] = useState<string>("")

    const inputsRef = useRef<(HTMLInputElement | null)[]>([])


    useEffect(()=>{
        if(timer <=0) return;

        const interval = setInterval(()=>{
            setTimer((prev) => prev-1)
        },1000)

        return ()=> clearInterval(interval)
    }, [timer]);


    useEffect(()=>{
        inputsRef.current[0]?.focus();
    }, [])

    const handleChange = (value: string, index: number): void => {
        if(!/^\d*$/.test(value)) return;
        const newOtp = [...otp]

        newOtp[index] = value.slice(-1)
        setOtp(newOtp);

        if(value && index<length -1){
            inputsRef.current[index+1]?.focus()
        }
    }


    const handleKeyDown = (e: React.KeyboardEvent, index:number): void =>{
        if(e.key === 'Backspace' && !otp[index] && index>0 ){
            inputsRef.current[index - 1]?.focus()
        }
    };

    const handlePaste = (e: React.ClipboardEvent): void =>{
        e.preventDefault()

        const pasted = e.clipboardData
        .getData("text")
        .replace(/\D/g,"")
        .slice(0, length);

        const newOtp = [...otp]
        pasted.split("").forEach((char, i)=>{
            newOtp[i] = char
        })
        setOtp(newOtp)

        inputsRef.current[Math.min(pasted.length, length-1)]?.focus()
    }


    const handleVerify = async (): Promise<void> =>{
        const otpString =  otp.join("")

        if(otpString.length < length){
            setApiError("please enter all 6 digits")
            return;
        }

        setApiError("");
        setLoading(true)

        try {
            await onVerify(otpString)
        } catch (err:any) {
            setApiError(
                err?.response?.data?.message || "invalid OTP. please try again"
            )
        } finally{
            setLoading(false)
        }
    };


    const handleResend = async (): Promise<void> =>{
        if(!onResend) return 

        setResending(true)
        setApiError("")

        try {
            await onResend()

            setOtp(Array(length).fill(""))

            setTimer(resendTimeout);

            inputsRef.current[0]?.focus();
        } catch (err:any) {
            setApiError(
                err?.response?.data?.message || "failed to resend OTP."
            );
        }finally{
            setResending(false)
        }
    };


    return {
        otp,
        timer,
        loading,
        resending,
        apiError,
        inputsRef,
        handleChange,
        handleKeyDown,
        handlePaste,
        handleVerify,
        handleResend
    }

}