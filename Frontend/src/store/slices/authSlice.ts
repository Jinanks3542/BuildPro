import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserRole } from "../../types/auth.types";


interface AuthState {
    accessToken: string| null
    role: UserRole | null
    isAuthenticated: boolean
}

const initialState: AuthState ={
    accessToken:null,
    role: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (
            state,
            action: PayloadAction<{
                accessToken: string; 
                role: UserRole}>
        )=>{
            state.accessToken = action.payload.accessToken
            state.role = action.payload.role
            state.isAuthenticated = true

        },
        clearAuth: (state) =>{
            state.accessToken = null;
            state.role = null;
            state.isAuthenticated = false
        },
    },
})

export const { setAuth, clearAuth } = authSlice.actions
export default authSlice.reducer