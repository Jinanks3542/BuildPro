import { useOtpInput } from "../../hooks/auth/useOtpInput";

interface OtpFormProps {
  email: string;
  onVerify: (otp: string) => Promise<void>;
  onResend?: () => Promise<void>;
  length?: number;
  resendTimeout?: number;
}

const OtpForm: React.FC<OtpFormProps> = ({
  email,
  onVerify,
  onResend,
  length = 6,
  resendTimeout = 60,
}) => {
  const {
    otp,
    timer,
    loading,
    resending,
    apiError,
    inputsRef,
    handleChange,
    handleKeyDown,
    handlePaste,
    handleVerify,
    handleResend,
  } = useOtpInput({ length, resendTimeout, onVerify, onResend });

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg px-8 py-8">
      {/* ── Header ── */}
      <div className="flex flex-col items-center text-center mb-6">
        {/* email icon in amber circle — matches signup theme */}
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0
                002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
          Verify your email
        </h2>
        <p className="text-gray-400 text-xs mt-1">We sent a 6-digit code to</p>
        {/* amber color matches signup theme */}
        <p className="text-amber-500 text-sm font-semibold mt-0.5">{email}</p>
      </div>

      {/* ── API Error Banner ── */}
      {/* only renders when apiError has a value */}
      {apiError && (
        <div
          className="mb-4 px-3 py-2 bg-red-50 border border-red-200
          rounded-lg text-xs text-red-600 text-center"
        >
          {apiError}
        </div>
      )}

      {/* ── OTP Input Boxes ── */}
      {/* onPaste on the wrapper div catches paste anywhere in the group */}
      <div className="flex gap-2 justify-center mb-6" onPaste={handlePaste}>
        {otp.map((digit, index) => (
          <input
            key={index}
            // registers this DOM element into inputsRef array at this index
            // so handleChange/handleKeyDown can call .focus() on siblings
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            type="text" // NOT number — avoids browser quirks
            inputMode="numeric" // mobile shows number keyboard
            maxLength={1} // hard limit — one character per box
            value={digit} // controlled input — React owns the value
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`
              w-11 h-12 text-center text-lg font-bold rounded-lg
              outline-none transition-all
              ${
                digit
                  ? // filled box → amber border + amber tint (visual progress)
                    "border-2 border-amber-400 bg-amber-50 text-gray-900"
                  : // empty box → gray border + gray bg
                    "border border-gray-200 bg-gray-50 text-gray-900"
              }
              focus:border-2 focus:border-amber-400
              focus:ring-2 focus:ring-amber-400/20
            `}
          />
        ))}
      </div>

      {/* ── Verify Button ── */}
      <button
        onClick={handleVerify}
        // disabled in 2 cases: API call running OR not all boxes filled
        disabled={loading || otp.join("").length < length}
        className="w-full py-2.5 bg-amber-400 hover:bg-amber-500
          disabled:opacity-60 disabled:cursor-not-allowed
          text-gray-900 font-bold text-sm rounded-xl
          shadow-md shadow-amber-400/30
          active:scale-[0.98] transition-all cursor-pointer"
      >
        {/* text changes based on loading state */}
        {loading ? "Verifying..." : "Verify Email"}
      </button>

      {/* ── Resend Section ── */}
      <div className="text-center mt-4 space-y-2">
        {/* timer > 0 → show countdown | timer = 0 → show resend button */}
        {timer > 0 ? (
          <p className="text-xs text-gray-400">
            Resend code in{" "}
            {/* padStart(2,"0") → "5" becomes "05" for clean display */}
            <span className="text-amber-500 font-semibold">
              00:{timer.toString().padStart(2, "0")}
            </span>
          </p>
        ) : (
          <button
            onClick={handleResend}
            disabled={resending}
            className="text-xs text-amber-500 hover:text-amber-600
              font-semibold transition disabled:opacity-60"
          >
            {resending ? "Sending..." : "Resend OTP"}
          </button>
        )}

        {/* back to signup if wrong email */}
        <p className="text-xs text-gray-400">
          Wrong email?{" "}
          <a 
            href="/signup"
            className="text-amber-500 hover:text-amber-600
      font-semibold transition-colors"
          >
            Go back
          </a>
        </p>
      </div>
    </div>
  );
};

export default OtpForm;
