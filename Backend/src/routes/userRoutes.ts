import { Router } from "express";
import type { Response, Request } from 'express';
import { authController } from "../di/userDI";
import { signupSchemaUser } from "../schemas/authSchema";

const router = Router()
router.post('/signup',authController.signupUser.bind(authController))
router.post("/verifyOtp",authController.verifyUserOtp.bind(authController))
router.post("/resendOtp",authController.resendUserOtp.bind(authController))
router.post("/login", authController.loginUser.bind(authController))

export default router