import { Link } from 'react-router-dom'
import signupImg from '../../assets/signupImg.jpg'
import { Lock } from 'lucide-react'
import { FEATURE_PILLS, FOOTER_LINKS } from '../../constants/authConstants'

const AuthLeftPanel: React.FC = () => {
  return (
    <div className="hidden lg:block relative w-1/2 h-full">
      <img
        src={signupImg}
        alt="Construction site"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-slate-900/60 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-amber-900/30 to-transparent" />

      <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10">

        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center shadow-lg shadow-amber-400/40">
            <Lock size={18} color="#1e293b" />
          </div>
          <span className="text-white text-xl font-extrabold tracking-tight">
            BuildPro
          </span>
        </Link>

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
          <div className="flex flex-wrap gap-2 mt-6">
            {FEATURE_PILLS.map((f) => (
              <span key={f}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-5">
          {FOOTER_LINKS.map((l) => (
            <a key={l} href="#"
              className="text-slate-400 hover:text-amber-400 text-xs transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthLeftPanel;