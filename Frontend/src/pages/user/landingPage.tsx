import landingImg from "../../assets/landingpageImg.jpg";
import { Lock, Star, CheckCircle, Users, FileText, MapPin, ArrowRight, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Shield, Clock, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="font-sans bg-white text-gray-900 w-full">

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm w-full">
        <div className="w-full max-w-screen-xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center shadow shadow-amber-400/40">
              <Lock size={16} color="#1e293b" />
            </div>
            <span className="text-gray-900 text-xl font-extrabold tracking-tight">BuildPro</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {["Features", "How It Works", "Testimonials", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-gray-500 hover:text-amber-500 font-medium transition-colors">
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm text-gray-600 hover:text-amber-500 font-semibold transition-colors px-3 py-2">
              Login
            </a>
            <a href="/signup"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-bold rounded-lg shadow shadow-amber-400/30 transition-all active:scale-95">
              Sign Up Free
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="w-full bg-slate-900 relative overflow-hidden">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(251,191,36,0.3) 40px, rgba(251,191,36,0.3) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(251,191,36,0.3) 40px, rgba(251,191,36,0.3) 41px)`
          }} />
        </div>

        {/* Amber glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-400/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />

        <div className="w-full max-w-screen-xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">

          {/* Left text */}
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Trusted by 10,000+ Construction Teams
            </span>

            <h1 className="text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Find Trusted <br />
              <span className="text-amber-400">Contractors</span> &<br />
              Engineers
            </h1>

            <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
              Get verified professionals, stage-by-stage work updates, secure payments,
              and complete transparency for every construction or renovation project.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="/signup"
                className="flex items-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm rounded-xl shadow-lg shadow-amber-400/30 transition-all active:scale-95">
                Explore Contractors
                <ArrowRight size={16} />
              </a>
              <a href="#how-it-works"
                className="flex items-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-amber-400 text-slate-300 hover:text-amber-400 font-semibold text-sm rounded-xl transition-all">
                Learn More
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 pt-8 border-t border-slate-700">
              {[
                { value: "10K+", label: "Active Teams" },
                { value: "50K+", label: "Projects Done" },
                { value: "98%", label: "Satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold text-amber-400">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 min-w-0 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={landingImg}
                alt="Construction team"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>

            {/* Floating verified badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle size={18} color="#1e293b" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Verified Contractor</p>
                <p className="text-xs text-gray-400">Identity & docs checked</p>
              </div>
            </div>

            {/* Floating rating */}
            <div className="absolute -top-5 -right-5 bg-white rounded-xl shadow-xl px-4 py-3 border border-gray-100">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-gray-900">4.9 / 5.0</p>
              <p className="text-xs text-gray-400">2,400+ reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className="w-full bg-amber-400 py-4">
        <div className="w-full max-w-screen-xl mx-auto px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            {[
              { icon: <Shield size={16} />, text: "100% Verified Professionals" },
              { icon: <Clock size={16} />, text: "Stage-by-Stage Updates" },
              { icon: <CheckCircle size={16} />, text: "Secure Milestone Payments" },
              { icon: <TrendingUp size={16} />, text: "Real-Time Project Tracking" },
              { icon: <Users size={16} />, text: "Smart Contractor Matching" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-2 text-gray-900 text-sm font-semibold">
                {f.icon}
                {f.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE BUILDPRO ── */}
      <section id="features" className="w-full py-24 bg-gray-50">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-semibold mb-3">
              Why BuildPro
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              Everything You Need in One Platform
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              From finding the right contractor to final handover — BuildPro handles it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <CheckCircle size={24} className="text-amber-500" />,
                title: "Verified Professionals",
                desc: "Every contractor undergoes thorough identity & document verification before joining our platform.",
                bg: "bg-amber-50",
              },
              {
                icon: <FileText size={24} className="text-amber-500" />,
                title: "Transparent Payments",
                desc: "Pay safely stage-by-stage with automated invoices. Release funds only when you approve.",
                bg: "bg-blue-50",
              },
              {
                icon: <MapPin size={24} className="text-amber-500" />,
                title: "Work Tracking",
                desc: "Get daily work updates, images, videos, real-time progress charts & timelines.",
                bg: "bg-green-50",
              },
              {
                icon: <Users size={24} className="text-amber-500" />,
                title: "Smart Matching",
                desc: "Find contractors based on location, service type, availability and estimated budget.",
                bg: "bg-purple-50",
              },
            ].map((f) => (
              <div key={f.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-amber-200 transition-all duration-200 group cursor-pointer">
                <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="w-full py-24 bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-semibold mb-3">
              Simple Process
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              How It Works
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Get your project started in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector */}
            <div className="hidden md:block absolute top-10 left-[33%] right-[33%] h-0.5 bg-gradient-to-r from-amber-300 to-amber-400 z-0" />

            {[
              {
                step: "01",
                title: "Post Your Project",
                desc: "Describe your project, set your budget, and upload any reference images or documents.",
                color: "from-amber-400 to-amber-500",
              },
              {
                step: "02",
                title: "Match & Compare",
                desc: "Get matched with verified contractors. Review profiles, ratings, and past project photos.",
                color: "from-amber-500 to-orange-500",
              },
              {
                step: "03",
                title: "Track & Pay Safely",
                desc: "Monitor progress stage by stage. Release payments only when you approve each milestone.",
                color: "from-orange-500 to-amber-400",
              },
            ].map((s) => (
              <div key={s.step} className="relative z-10 flex flex-col items-center text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg shadow-amber-400/30 mb-6 group-hover:scale-105 transition-transform`}>
                  <span className="text-gray-900 text-2xl font-extrabold">{s.step}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="w-full bg-slate-900 py-24 relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />

        <div className="w-full max-w-screen-xl mx-auto px-8 relative z-10">

          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold mb-3">
              Reviews
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3">
              What Homeowners Say About{" "}
              <span className="text-amber-400">BuildPro</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Real reviews from real homeowners who trusted us with their projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "James Martinez",
                role: "Homeowner, Texas",
                review: "BuildPro made my home renovation so easy. The contractor was professional and I could track every stage of the work with daily updates and photos.",
                rating: 5,
                initial: "JM",
              },
              {
                name: "Sarah Patel",
                role: "Property Developer, NYC",
                review: "The payment system is brilliant. I only paid after each stage was completed. No surprises, complete transparency, and quality work delivered on time.",
                rating: 5,
                initial: "SP",
                featured: true,
              },
              {
                name: "Robert Chen",
                role: "Homeowner, California",
                review: "Found the perfect engineer for my building project through BuildPro. The verification process gave me confidence, and the results exceeded expectations.",
                rating: 5,
                initial: "RC",
              },
            ].map((t) => (
              <div key={t.name}
                className={`rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-1 ${
                  t.featured
                    ? "bg-amber-400 border-amber-300 shadow-xl shadow-amber-400/20"
                    : "bg-slate-800 border-slate-700 hover:border-amber-400/30"
                }`}>

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={13}
                      className={t.featured ? "fill-gray-900 text-gray-900" : "fill-amber-400 text-amber-400"} />
                  ))}
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${t.featured ? "text-gray-900" : "text-slate-300"}`}>
                  "{t.review}"
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    t.featured ? "bg-gray-900 text-amber-400" : "bg-amber-400 text-gray-900"
                  }`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${t.featured ? "text-gray-900" : "text-white"}`}>{t.name}</p>
                    <p className={`text-xs ${t.featured ? "text-gray-700" : "text-slate-400"}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="w-full py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-amber-100/60 to-transparent" />

        <div className="w-full max-w-screen-xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Ready to Start Your <span className="text-amber-500">Project?</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Join thousands of homeowners and construction professionals already using BuildPro to get projects done right.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="/signup"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm rounded-xl shadow-lg shadow-amber-400/30 transition-all active:scale-95">
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <a href="#features"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-amber-400 text-amber-600 hover:bg-amber-50 font-bold text-sm rounded-xl transition-all">
              See All Features
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="w-full bg-slate-900 text-slate-400 pt-16 pb-8">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 bg-amber-400 rounded-lg flex items-center justify-center">
                  <Lock size={15} color="#1e293b" />
                </div>
                <span className="text-white font-extrabold text-xl tracking-tight">BuildPro</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 mb-6">
                Connecting homeowners with quality, trusted construction professionals for every project.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#"
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-amber-400 flex items-center justify-center group transition-all duration-200">
                    <Icon size={15} className="text-slate-400 group-hover:text-gray-900 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <h4 className="text-white text-sm font-bold mb-5">About BuildPro</h4>
              <ul className="flex flex-col gap-3 text-xs">
                {["How It Works", "For Contractors", "Pricing Plans", "Careers"].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-amber-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-sm font-bold mb-5">Contact</h4>
              <ul className="flex flex-col gap-3 text-xs">
                {["Support Center", "Contact Us", "Find Contractors", "Become a Contractor"].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-amber-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Contact info */}
            <div>
              <h4 className="text-white text-sm font-bold mb-5">Legal</h4>
              <ul className="flex flex-col gap-3 text-xs mb-6">
                {["Terms of Service", "Privacy Policy", "Cookie Policy", "Refund Policy"].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-amber-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 text-xs">
                <a href="tel:+1800000000" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Phone size={13} className="shrink-0" />
                  +1 (800) 000-0000
                </a>
                <a href="mailto:hello@buildpro.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Mail size={13} className="shrink-0" />
                  hello@buildpro.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
            <p>© 2025 BuildPro — Connecting You to Trusted Contractors</p>
            <p className="text-slate-500">Made with ❤️ for homeowners everywhere</p>
          </div>
        </div>
      </footer>

    </div>
  );
}