import AuthController from "../controllers/userController/authController";
import UserRepository from "../repositories/userRepository";
import AdminRepository from "../repositories/adminRepository";
import AuthService from "../services/userServices/userAuthServices";


const userRepo  = new UserRepository();
const adminRepo = new AdminRepository()
const authService  = new AuthService(userRepo,adminRepo)
export const authController = new AuthController(authService) 



