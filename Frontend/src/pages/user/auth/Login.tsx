// import loginImg from "./assets/loginImg";
// import { FcGoogle } from "react-icons/fc";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";
// import { useState } from "react";

// export default function LoginPage() {
//   const [showPass, setShowPass] = useState(false);

//   return (
//     <div className="flex h-screen overflow-hidden font-sans">

//       {/* ── LEFT PANEL ── */}
//       <div className="hidden lg:block relative w-1/2 h-full">
//         <img
//           src={loginImg}
//           alt="Construction site"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/60 to-transparent" />
//         <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />

//         <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10">

//           {/* Logo */}
//           <div className="flex items-center gap-2.5">
//             <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center shadow-lg shadow-amber-400/40">
//               <Lock size={18} color="#1e293b" />
//             </div>
//             <span className="text-white text-xl font-extrabold tracking-tight">BuildPro</span>
//           </div>

//           {/* Center content */}
//           <div>
//             <h1 className="text-4xl font-extrabold text-white leading-tight tracking-tight mb-3">
//               Welcome<br />
//               <span className="text-amber-400">Back.</span>
//             </h1>
//             <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
//               Log in to manage your projects, track progress, and collaborate with your team — all in one place.
//             </p>

//             {/* Stats row */}
//             <div className="flex gap-6 mt-8">
//               {[
//                 { value: "10K+", label: "Teams" },
//                 { value: "98%", label: "Uptime" },
//                 { value: "50K+", label: "Projects" },
//               ].map((s) => (
//                 <div key={s.label}>
//                   <p className="text-amber-400 text-2xl font-extrabold">{s.value}</p>
//                   <p className="text-slate-400 text-xs mt-0.5">{s.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Footer links */}
//           <div className="flex gap-5">
//             {["Privacy Policy", "Terms of Service", "Support"].map((l) => (
//               <a key={l} href="#" className="text-slate-400 hover:text-amber-400 text-xs transition-colors">
//                 {l}
//               </a>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* ── RIGHT PANEL ── */}
//       <div className="flex flex-1 lg:w-1/2 lg:flex-none items-center justify-center px-6 bg-gray-50">
//         <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-8">

//           {/* Mobile logo */}
//           <div className="flex lg:hidden items-center gap-2 mb-6">
//             <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center">
//               <Lock size={16} color="#1e293b" />
//             </div>
//             <span className="text-gray-900 font-bold text-lg tracking-tight">BuildPro</span>
//           </div>

//           {/* Header */}
//           <div className="mb-6">
//             <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
//               Welcome back
//             </h2>
//             <p className="text-gray-400 text-xs mt-1">
//               Sign in to your BuildPro account
//             </p>
//           </div>

//           {/* Form Fields */}
//           <div className="flex flex-col gap-3">

//             {/* Email */}
//             <div className="flex flex-col gap-1">
//               <label className="text-xs font-semibold text-gray-700">Email Address</label>
//               <div className="relative flex items-center">
//                 <Mail size={15} className="absolute left-3 text-gray-400 pointer-events-none" />
//                 <input
//                   type="email"
//                   placeholder="john@company.com"
//                   className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-xs bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition placeholder:text-gray-400"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="flex flex-col gap-1">
//               <div className="flex items-center justify-between">
//                 <label className="text-xs font-semibold text-gray-700">Password</label>
//                 <a href="/forgot-password" className="text-xs text-amber-500 hover:text-amber-600 font-medium transition-colors">
//                   Forgot password?
//                 </a>
//               </div>
//               <div className="relative flex items-center">
//                 <Lock size={15} className="absolute left-3 text-gray-400 pointer-events-none" />
//                 <input
//                   type={showPass ? "text" : "password"}
//                   placeholder="Enter your password"
//                   className="w-full pl-9 pr-9 py-2.5 border border-gray-200 rounded-lg text-xs bg-gray-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none transition placeholder:text-gray-400"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPass(!showPass)}
//                   className="absolute right-3 text-gray-400 hover:text-gray-600 transition cursor-pointer"
//                 >
//                   {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
//                 </button>
//               </div>
//             </div>

//           </div>

//           {/* Remember me */}
//           <div className="flex items-center gap-2 mt-4">
//             <input
//               type="checkbox"
//               id="remember"
//               className="w-3.5 h-3.5 accent-amber-400 cursor-pointer"
//             />
//             <label htmlFor="remember" className="text-xs text-gray-500 cursor-pointer">
//               Remember me for 30 days
//             </label>
//           </div>

//           {/* Login Button */}
//           <button className="mt-5 w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm rounded-xl shadow-md shadow-amber-400/30 active:scale-[0.98] transition-all cursor-pointer">
//             Login
//           </button>

//           {/* Divider */}
//           <div className="flex items-center gap-3 my-4">
//             <div className="flex-1 h-px bg-gray-100" />
//             <span className="text-xs text-gray-400">or</span>
//             <div className="flex-1 h-px bg-gray-100" />
//           </div>

//           {/* Google Button */}
//           <button className="w-full py-2.5 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition cursor-pointer">
//             <FcGoogle size={18} />
//             Continue with Google
//           </button>

//           {/* Signup link */}
//           <p className="text-center text-xs text-gray-400 mt-4">
//             Don't have an account?{" "}
//             <a href="/signup" className="text-amber-500 hover:text-amber-600 font-semibold transition-colors">
//               Sign Up
//             </a>
//           </p>

//         </div>
//       </div>

//     </div>
//   );
// }