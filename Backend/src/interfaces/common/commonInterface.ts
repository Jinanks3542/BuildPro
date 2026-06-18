export interface OtpData{
    otp: string;
    email: string;
    expiry:number
}



export type AuthRole = 'admin' | 'vendor' | 'user';
export type AuthProvider = 'local' | 'google'
export const AUTH_PROVIDERS: AuthProvider[] = ['local' , 'google']

