import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

      {/* <p className="text-orange-500 font-semibold text-sm mb-2">
        BuildPro Admin
      </p> */}

      <h1 className="text-4xl font-extrabold text-slate-800 mb-8 ">
       Admin Login
      </h1>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Email
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="email"
            placeholder="username@gmail.com"
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
          />
        </div>
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-11 pr-12 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <button
          type="button"
          className="text-orange-500 text-sm font-medium"
        >
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
      >
        Sign In
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4 my-7">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-sm text-slate-500">
          Or Continue With
        </span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Google */}
      <button
        type="button"
        className="w-full border border-slate-200 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-slate-50 transition"
      >
        <FcGoogle size={20} />
        Continue with Google
      </button>

      <p className="text-center text-sm text-slate-500 mt-8">
        Don't have an account?{" "}
        <span className="text-orange-500 font-semibold cursor-pointer">
          Register for free
        </span>
      </p>

    </div>
  );
}