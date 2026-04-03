import { Eye, EyeOff, Mail, Phone, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import signupImg from "../../../assets/signupImg.jpg";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  // const [showPass, setShowPass] = useState(false);
  // const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden font-sans">
      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:block relative w-1/2 h-full">
        <img
          src={signupImg}
          alt="Construction site"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-amber-900/30 to-transparent" />

        <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center shadow-lg shadow-amber-400/40">
              <Lock size={18} color="#1e293b" />
            </div>
            <span className="text-white text-xl font-extrabold tracking-tight">
              BuildPro
            </span>
          </div>

          {/* Tagline */}
          <div>
            <h1 className="text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
              Build Smarter.
              <br />
              <span className="text-amber-400">Manage Better.</span>
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              The all-in-one platform for construction teams to track projects,
              collaborate, and deliver on time.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "Project Tracking",
                "Team Collaboration",
                "Document Management",
              ].map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Support"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-slate-400 hover:text-amber-400 text-xs transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex flex-1 lg:w-1/2 lg:flex-none items-center justify-center px-6 bg-gray-50">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
              Create your account
            </h2>
            <p className="text-gray-400 text-xs mt-1">
              Join thousands of construction teams worldwide
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-3">
            {/* Full Name */}
            <div className="relative flex items-center">
              <User
                size={15}
                className="absolute left-3 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition placeholder:text-gray-400"
              />
            </div>

            {/* Email */}
            <div className="relative flex items-center">
              <Mail
                size={15}
                className="absolute left-3 text-gray-400 pointer-events-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition placeholder:text-gray-400"
              />
            </div>

            {/* Phone */}
            <div className="relative flex items-center">
              <Phone
                size={15}
                className="absolute left-3 text-gray-400 pointer-events-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition placeholder:text-gray-400"
              />
            </div>

            {/* Password */}
            <div className="relative flex items-center">
              <Lock
                size={15}
                className="absolute left-3 text-gray-400 pointer-events-none"
              />
              <input
                // type={showPass ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-xs bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition placeholder:text-gray-400"
              />
              <button
                type="button"
                // onClick={() => setShowPass(!showPass)}
                className="absolute right-3 text-gray-400 hover:text-gray-600 transition cursor-pointer"
              >
                {/* {showPass ? <EyeOff size={15} /> : <Eye size={15} />} */}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative flex items-center">
              <Lock
                size={15}
                className="absolute left-3 text-gray-400 pointer-events-none"
              />
              <input
                // type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-xs bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition placeholder:text-gray-400"
              />
              <button
                type="button"
                // onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 text-gray-400 hover:text-gray-600 transition cursor-pointer"
              >
                {/* {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />} */}
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="mt-5 w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm rounded-xl shadow-md shadow-amber-400/30 active:scale-[0.98] transition-all cursor-pointer">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Google Button */}
          <button className="w-full py-2.5 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition cursor-pointer">
            <FcGoogle size={18} />
            Sign up with Google
          </button>

          {/* Login link */}
          <p className="text-center text-xs text-gray-400 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-amber-500 hover:text-amber-600 font-semibold transition-colors"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
