import * as Yup from "yup";
import { SIGNUP_VALIDATION } from "../constants/authConstants";

export const signupValidationSchema = Yup.object({
    name: Yup.string()
      .min(SIGNUP_VALIDATION.NAME_MIN, "Name must be at least 2 characters")
      .required("Full name is required"),

    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

    phone: Yup.string()
      .matches(SIGNUP_VALIDATION.PHONE_REGEX, "Enter a valid 10-digit phone number")
      .required("Phone number is required"),

    password: Yup.string()
      .min(SIGNUP_VALIDATION.PASSWORD_MIN, "Password must be at least 8 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Please confirm your password"), 
})

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
    password:Yup.string().required("Password is required").matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.'
        ),
})