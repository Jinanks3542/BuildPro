import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from 'yup'
import {useState} from 'react'
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Phone, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { signupValidationSchema } from "../../utils/authValidation";
import type { SignupFormValues, UserSignupRequest } from "../../types/auth.types";


interface UserSignupFormProps {
  onSubmit: (data: UserSignupRequest) => Promise<void>
}

const InputField = ({
  name, type = "text", placeholder, icon: Icon, rightElement,
}: {
  name: string;
  type?: string;
  placeholder: string;
  icon: React.ElementType;
  rightElement?: React.ReactNode;
}) => (
  <div>
    <div className="relative flex items-center">
      <Icon size={15} className="absolute left-3 text-gray-400 pointer-events-none z-10" />
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-xs
          bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20
          outline-none transition placeholder:text-gray-400"
      />
      {rightElement}
    </div>
    <ErrorMessage name={name} component="p"
      className="text-red-500 text-[10px] mt-1 ml-1" />
  </div>
);

const UserSignupForm: React.FC<UserSignupFormProps> = ({ onSubmit }) => {
  const [showPass, setShowPass]       = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [apiError, setApiError]       = useState("");

  const initialValues: SignupFormValues = {
    name: "", email: "", phone: "", password: "", confirmPassword: "",
  };

  const handleSubmit = async (
    values: SignupFormValues,
    { setSubmitting }: { setSubmitting: (v: boolean) => void }
  ) => {
    setApiError("");
    try {
      const { confirmPassword, ...payload } = values;
      await onSubmit(payload);
    } catch (err: any) {
      setApiError(err?.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Reusable eye toggle button with both UX fixes applied
  const EyeToggle = ({
    show, onToggle,
  }: {
    show: boolean;
    onToggle: () => void;
  }) => (
    <button
      type="button"
      tabIndex={-1}
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle();
      }}
      className="absolute right-3 text-gray-400 hover:text-gray-600 transition"
    >
      {show ? <EyeOff size={15} /> : <Eye size={15} />}
    </button>
  );

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-8">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
          Create your account
        </h2>
        <p className="text-gray-400 text-xs mt-1">
          Join thousands of construction teams worldwide
        </p>
      </div>

      {apiError && (
        <div className="mb-3 px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600">
          {apiError}
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={signupValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-3">

            <InputField name="name"  placeholder="Full Name"     icon={User} />
            <InputField name="email" placeholder="Email Address" icon={Mail} />
            <InputField name="phone" placeholder="Phone Number"  icon={Phone} />

            <InputField
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              icon={Lock}
              rightElement={
                <EyeToggle show={showPass} onToggle={() => setShowPass(p => !p)} />
              }
            />

            <InputField
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              icon={Lock}
              rightElement={
                <EyeToggle show={showConfirm} onToggle={() => setShowConfirm(p => !p)} />
              }
            />

            <button type="submit" disabled={isSubmitting}
              className="mt-2 w-full py-2.5 bg-amber-400 hover:bg-amber-500 disabled:opacity-60
                text-gray-900 font-bold text-sm rounded-xl shadow-md shadow-amber-400/30
                active:scale-[0.98] transition-all cursor-pointer">
              {isSubmitting ? "Creating account..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>

      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <button className="w-full py-2.5 border border-gray-200 rounded-xl flex items-center
        justify-center gap-2 text-xs font-semibold text-gray-600 hover:bg-gray-50
        hover:border-gray-300 transition cursor-pointer">
        <FcGoogle size={18} />
        Sign up with Google
      </button>

      <p className="text-center text-xs text-gray-400 mt-4">
        Already have an account?{" "}
        <Link to="/login"
          className="text-amber-500 hover:text-amber-600 font-semibold transition-colors">
          Login
        </Link>
      </p>
    </div>
  );
};

export default UserSignupForm;