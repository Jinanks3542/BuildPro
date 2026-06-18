import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import { loginValidationSchema } from "../../utils/authValidation";
import type { LoginValues, LoginRequest } from "../../types/auth.types";

interface LoginFormProps {
  onSubmit: (data: LoginRequest) => Promise<void>;
}

const UserLoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [showPass, setShowPass] = useState(false);
  const [apiError, setApiError] = useState("");

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting }: { setSubmitting: (value: boolean) => void },
  ) => {
    setApiError("");

    try {
      await onSubmit(values);
    } catch (error: any) {
      setApiError(error?.response?.data?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-8">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-xs mt-1">
          Sign in to your BuildPro account
        </p>
      </div>

      {apiError && (
        <div className="mb-3 px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
          {apiError}
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-3">
            <div>
              <div className="relative flex items-center">
                <Mail
                  size={15}
                  className="absolute left-3 text-gray-400 pointer-events-none"
                />

                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs
                  bg-gray-50 focus:border-amber-400 focus:ring-2
                  focus:ring-amber-400/20 outline-none transition
                  placeholder:text-gray-400"
                />
              </div>

              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-[10px] mt-1 ml-1"
              />
            </div>

            <div>
              <div className="relative flex items-center">
                <Lock
                  size={15}
                  className="absolute left-3 text-gray-400 pointer-events-none"
                />

                <Field
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-xs
                  bg-gray-50 focus:border-amber-400 focus:ring-2
                  focus:ring-amber-400/20 outline-none transition
                  placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPass((prev) => !prev)}
                  className="absolute right-3 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>

              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-[10px] mt-1 ml-1"
              />
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-xs text-amber-500 hover:text-amber-600"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full py-2.5 bg-amber-400 hover:bg-amber-500 disabled:opacity-60
              text-gray-900 font-bold text-sm rounded-xl shadow-md
              shadow-amber-400/30 active:scale-[0.98] transition-all"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>

      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <button
        type="button"
        className="w-full py-2.5 border border-gray-200 rounded-xl flex items-center
        justify-center gap-2 text-xs font-semibold text-gray-600
        hover:bg-gray-50 hover:border-gray-300 transition"
      >
        <FcGoogle size={18} />
        Continue with Google
      </button>

      <p className="text-center text-xs text-gray-400 mt-4">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-amber-500 hover:text-amber-600 font-semibold"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default UserLoginForm;
