
import { Router } from "express";
import { authController } from "../di/userDI";

const router = Router()

router.post("/login", authController.loginAdmin.bind(authController));


export default router;