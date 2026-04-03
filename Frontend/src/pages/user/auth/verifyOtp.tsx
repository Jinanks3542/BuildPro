import { RefreshCw, ShieldCheck } from "lucide-react";

export default function OtpModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Top amber bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 to-amber-500" />

        {/* Progress bar — change width to show fill state */}
        <div className="h-0.5 bg-gray-100">
          <div className="h-full bg-amber-300 w-4/6 transition-all duration-300" />
        </div>

        <div className="px-8 py-7">

          {/* Close button */}
          <button className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition cursor-pointer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
              <ShieldCheck size={32} className="text-amber-400" />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
              Verify Your Email
            </h3>
            <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
              We sent a 6-digit code to <br />
              <span className="font-semibold text-gray-700">john@company.com</span>
            </p>
          </div>

          {/* OTP Input Boxes */}
          <div className="flex justify-center gap-2.5 mb-2">
            {/* Filled box */}
            <input
              type="text"
              maxLength={1}
              defaultValue="4"
              className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 outline-none border-amber-400 bg-amber-50 text-gray-900 shadow-sm shadow-amber-200"
            />
            {/* Filled box */}
            <input
              type="text"
              maxLength={1}
              defaultValue="8"
              className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 outline-none border-amber-400 bg-amber-50 text-gray-900 shadow-sm shadow-amber-200"
            />
            {/* Filled box */}
            <input
              type="text"
              maxLength={1}
              defaultValue="2"
              className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 outline-none border-amber-400 bg-amber-50 text-gray-900 shadow-sm shadow-amber-200"
            />
            {/* Filled box */}
            <input
              type="text"
              maxLength={1}
              defaultValue="7"
              className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 outline-none border-amber-400 bg-amber-50 text-gray-900 shadow-sm shadow-amber-200"
            />
            {/* Empty box — focused state */}
            <input
              type="text"
              maxLength={1}
              placeholder="-"
              className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 outline-none border-amber-400 bg-amber-50 text-gray-400 placeholder:text-gray-300"
            />
            {/* Empty box */}
            <input
              type="text"
              maxLength={1}
              placeholder="-"
              className="w-11 h-12 text-center text-lg font-bold rounded-xl border-2 outline-none border-gray-200 bg-gray-50 text-gray-400 placeholder:text-gray-300"
            />
          </div>

          {/* Timer row */}
          <div className="flex items-center justify-between mt-5 px-1">

            {/* Left text */}
            <p className="text-xs text-gray-400">Didn't receive the code?</p>

            {/* Timer circle + text */}
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="13" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                  <circle
                    cx="16" cy="16" r="13" fill="none"
                    stroke="#f59e0b" strokeWidth="3"
                    strokeDasharray="81.68"
                    strokeDashoffset="27"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-amber-500">
                  42
                </span>
              </div>
              <span className="text-xs text-gray-500">
                Resend in <span className="font-semibold text-gray-700">0:42</span>
              </span>
            </div>
          </div>

          {/* Resend button — shown when timer hits 0, dimmed for UI preview */}
          <div className="flex justify-end mt-2 px-1">
            <button className="flex items-center gap-1.5 text-amber-500 hover:text-amber-600 text-xs font-semibold transition cursor-pointer opacity-40 pointer-events-none">
              <RefreshCw size={13} />
              Resend OTP
            </button>
          </div>

          {/* Verify Button — amber when active, gray when disabled */}
          <button className="mt-4 w-full py-3 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-500 active:scale-[0.98] text-gray-900 shadow-md shadow-amber-400/30 cursor-pointer transition-all duration-150">
            Verify OTP
          </button>

          {/* Hint */}
          <p className="text-center text-xs text-gray-400 mt-3">
            Check your spam folder if you don't see it in your inbox.
          </p>

        </div>
      </div>
    </div>
  );
}