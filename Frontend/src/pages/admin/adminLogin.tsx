import AdminLoginForm from "../../components/common/adminLoginForm";
import adminLoginpageImg from "../../assets/adminLoginpageImg.jpg";

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center overflow-hidden">
      <div className="w-[95vw] h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-300 flex">

        {/* Left Side */}
        <div className="hidden lg:block w-1/2 h-full relative">
          <img
            src={adminLoginpageImg}
            alt="Construction"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-transparent" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-4xl font-bold mb-3">
              BuildPro Admin
            </h1>

            <p className="max-w-sm text-slate-200 text-sm leading-relaxed">
              Manage projects, contractors, homeowners and
              platform activities from one centralized dashboard.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 h-full flex items-center justify-center bg-slate-50 px-8">
          <AdminLoginForm />
        </div>

      </div>
    </div>
  );
}