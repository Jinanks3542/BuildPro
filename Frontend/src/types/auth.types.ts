export type UserRole = "user"|"vendor"|"admin";
export type AuthProvider = "local"| "google";

export interface BaseAuthUser{
    _id: string,
    name: string,
    email: string,
    phone: string,
    role: UserRole,
    isVerified: boolean,
    createdAt?: string,
    updatedAt?: string
}

export interface AuthUserData extends BaseAuthUser{
    role:"user",
    name: string,
    phone: string,
}

export interface AuthVendorData extends BaseAuthUser{
    role:"vendor";
    name: string;
    phone: string;
    CompanyName: string;
    isApproved: boolean
}

export interface AuthAdminData extends BaseAuthUser{
    role:"admin"
}

export type AuthUser = AuthUserData| AuthVendorData| AuthAdminData

export interface AuthResponse{
    accessToken: string
    user: AuthUser
}


export interface LoginValues{
    email: string
    password: string
}

export interface LoginRequest{
    email: string,
    password: string
}



