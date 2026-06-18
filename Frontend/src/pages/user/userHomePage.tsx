import contractorImg from "./assets/imageye___-_imgi_122_images.jpg";
import { 
  Lock, Star, CheckCircle, Search, MapPin, 
  MessageCircle, TrendingUp, Shield, CreditCard,
  Hammer, Home, Droplets, Zap, Paintbrush, 
  Layout, Grid, Wrench, ArrowRight,
  Facebook, Twitter, Instagram, Linkedin,
  Mail, Phone, Quote
} from "lucide-react";

export default function UserHomePage() {
  return (
    <div className="font-sans bg-white w-full">

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="w-full max-w-screen-xl mx-auto px-8 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
              <Lock size={14} color="#1e293b" />
            </div>
            <span className="text-gray-900 text-lg font-extrabold tracking-tight">BuildPro</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Contractors", "Projects", "Reviews", "Contact"].map((l) => (
              <a key={l} href="#"
                className="text-sm text-gray-500 hover:text-amber-500 font-medium transition-colors">
                {l}
              </a>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm text-gray-600 hover:text-amber-500 font-semibold px-3 py-2 transition-colors">
              Login
            </a>
            <a href="/signup"
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-bold rounded-lg shadow shadow-amber-400/30 transition-all active:scale-95">
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="w-full bg-amber-50 py-16">
        <div className="w-full max-w-screen-xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">

          {/* Left */}
          <div className="flex-1 min-w-0">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              Build Your Dream<br />
              Home with{" "}
              <span className="text-amber-400">Trusted Local<br />Contractors</span>
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              Connect with verified professionals, track your project in real-time, and bring your vision to life. It's home improvement made simple and stress-free! 🏠
            </p>

            {/* Search bar */}
            <div className="flex items-center bg-white rounded-2xl shadow-md border border-gray-100 p-2 gap-2 mb-8 max-w-md">
              <select className="flex-1 text-sm text-gray-500 outline-none bg-transparent px-3 py-2 cursor-pointer">
                <option value="">Select Service</option>
                <option>Construction</option>
                <option>Renovation</option>
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>Painting</option>
              </select>
              <div className="w-px h-6 bg-gray-200" />
              <select className="flex-1 text-sm text-gray-500 outline-none bg-transparent px-3 py-2 cursor-pointer">
                <option value="">Select Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Houston</option>
              </select>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm rounded-xl transition-all active:scale-95">
                <Search size={15} />
                Search
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10">
              {[
                { value: "500+", label: "Verified Contractors" },
                { value: "2,000+", label: "Projects Completed" },
                { value: "4.9★", label: "Average Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-extrabold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 min-w-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={contractorImg}
                alt="Construction team"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Floating chat badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="flex -space-x-2">
                {["bg-amber-400", "bg-slate-400", "bg-green-400"].map((c, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`} />
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Trusted by families like yours</p>
                <p className="text-xs text-gray-400">1,500+ Happy Homeowners</p>
              </div>
            </div>

            {/* Floating search icon */}
            <div className="absolute top-6 right-6 w-11 h-11 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
              <Search size={18} color="#1e293b" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TOP RATED CONTRACTORS ── */}
      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Meet Our Top-Rated Contractors
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Real people who love what they do. Each one is verified, experienced, and ready to help bring your project to life! 👷
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Mike Johnson",
                quote: "Building dreams, one brick at a time.",
                exp: "15 years exp.",
                rating: 4.9,
                tags: ["Construction", "Renovation", "Roofing"],
                color: "bg-amber-100",
                initial: "MJ",
              },
              {
                name: "Sarah Martinez",
                quote: "Your home, my passion.",
                exp: "12 years exp.",
                rating: 5.0,
                tags: ["Interior Design", "Painting", "Flooring"],
                color: "bg-rose-100",
                initial: "SM",
              },
              {
                name: "David Chen",
                quote: "Quality work, guaranteed smiles.",
                exp: "18 years exp.",
                rating: 4.8,
                tags: ["Plumbing", "Electrical", "HVAC"],
                color: "bg-blue-100",
                initial: "DC",
              },
            ].map((c) => (
              <div key={c.name}
                className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center">

                {/* Avatar */}
                <div className="relative inline-block mb-4">
                  <div className={`w-16 h-16 rounded-full ${c.color} flex items-center justify-center text-gray-700 text-lg font-extrabold mx-auto`}>
                    {c.initial}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                    <CheckCircle size={11} color="#1e293b" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1">{c.name}</h3>
                <p className="text-xs text-gray-400 italic mb-3">"{c.quote}"</p>

                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-xs text-gray-500">{c.exp}</span>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-gray-700">{c.rating}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                  {c.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95">
                  <MessageCircle size={15} />
                  Chat with {c.name.split(" ")[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES WE OFFER ── */}
      <section className="w-full py-20 bg-amber-50">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Services We Offer
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Whatever your home needs, we've got you covered with skilled professionals ready to help! 🔧
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { icon: <Hammer size={22} className="text-amber-600" />, title: "Construction", desc: "Build from the ground up with expert builders" },
              { icon: <Home size={22} className="text-amber-600" />, title: "Renovation", desc: "Transform your existing space into something amazing" },
              { icon: <Droplets size={22} className="text-amber-600" />, title: "Plumbing", desc: "Fix leaks, install fixtures, and more" },
              { icon: <Zap size={22} className="text-amber-600" />, title: "Electrical", desc: "Safe, certified electrical work you can trust" },
              { icon: <Paintbrush size={22} className="text-amber-600" />, title: "Painting", desc: "Fresh colors to brighten up any room" },
              { icon: <Layout size={22} className="text-amber-600" />, title: "Interior Design", desc: "Create spaces that feel like home" },
              { icon: <Grid size={22} className="text-amber-600" />, title: "Flooring", desc: "Beautiful floors that last for years" },
              { icon: <Wrench size={22} className="text-amber-600" />, title: "General Repairs", desc: "Quick fixes for all your home needs" },
            ].map((s) => (
              <div key={s.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">{s.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              How It Works
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Getting started is super easy! Just three simple steps to your dream home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[22%] right-[22%] h-0.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 z-0" />

            {[
              {
                num: "1",
                icon: <Search size={26} color="#fff" />,
                title: "Find Your Perfect Match",
                desc: "Browse verified contractors, read reviews, and compare profiles. It's like dating, but for home improvement.",
              },
              {
                num: "2",
                icon: <MessageCircle size={26} color="#fff" />,
                title: "Chat & Plan Together",
                desc: "Message contractors directly, share your vision, and get quotes. No middlemen, just real conversations.",
              },
              {
                num: "3",
                icon: <Hammer size={26} color="#fff" />,
                title: "Watch Your Dream Come to Life",
                desc: "Track progress in real-time, make secure payments by milestone, and enjoy the transformation!",
              },
            ].map((s) => (
              <div key={s.num} className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-400/30">
                    {s.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-extrabold rounded-full flex items-center justify-center">
                    {s.num}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HOMEOWNERS LOVE US ── */}
      <section className="w-full py-20 bg-amber-50">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Why Homeowners Love Us
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              We've thought of everything to make your renovation journey smooth, safe, and actually enjoyable!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: <Shield size={22} className="text-amber-600" />,
                title: "No More Sketchy Contractors",
                desc: "Every pro is verified, background-checked, and reviewed by real homeowners. Sleep easy knowing you're in good hands.",
              },
              {
                icon: <CreditCard size={22} className="text-amber-600" />,
                title: "Pay As You Go",
                desc: "Release payments only when you're happy with each milestone. Your money stays safe until the work is done right.",
              },
              {
                icon: <MessageCircle size={22} className="text-amber-600" />,
                title: "Stay in the Loop",
                desc: "Chat directly with your contractor, get photo updates, and track progress in real-time. No more wondering what's happening.",
              },
              {
                icon: <TrendingUp size={22} className="text-amber-600" />,
                title: "Projects That Actually Finish",
                desc: "We help keep things on track with timelines, reminders, and support. Say goodbye to abandoned projects!",
              },
            ].map((f) => (
              <div key={f.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200 flex items-start gap-5 group">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-200 transition-colors">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ── */}
      <section className="w-full py-20 bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Recent Projects We're Proud Of
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Real homes, real transformations, real happy families! Check out what our contractors have been creating. 🏡
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Modern Kitchen Renovation", location: "Austin, TX", color: "from-amber-200 to-orange-300" },
              { title: "Cozy Living Room Makeover", location: "Portland, OR", color: "from-blue-200 to-cyan-300" },
              { title: "Spa-Like Bathroom Retreat", location: "Seattle, WA", color: "from-slate-200 to-slate-300" },
              { title: "Backyard Paradise", location: "Denver, CO", color: "from-green-200 to-emerald-300" },
              { title: "Home Office Transformation", location: "San Francisco, CA", color: "from-purple-200 to-violet-300" },
              { title: "Master Bedroom Refresh", location: "Boston, MA", color: "from-rose-200 to-pink-300" },
            ].map((p) => (
              <div key={p.title}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group cursor-pointer">
                <div className={`w-full h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative`}>
                  <Home size={40} className="text-white/60" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5">{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <MapPin size={12} className="text-amber-400" />
                    {p.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="w-full py-20 bg-amber-50">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              Stories from Happy Homeowners
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Don't just take our word for it - hear from families who've transformed their homes with us! 😊
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                review: "We were so nervous about our kitchen renovation, but BuildHome made it feel like a breeze! Our contractor Mike was amazing - he kept us updated every step of the way and the result is beyond our dreams. Our kids love the new breakfast nook!",
                project: "Kitchen Renovation",
                name: "Jennifer & Tom Williams",
                role: "Verified Homeowner",
                initial: "JT",
                color: "bg-amber-100",
              },
              {
                review: "After getting burned by a contractor before, I was skeptical. But the verified reviews and milestone payments gave me peace of mind. Sarah transformed my bathroom into a spa oasis, and I could track everything through the app. Game changer!",
                project: "Bathroom Remodel",
                name: "Marcus Thompson",
                role: "Verified Homeowner",
                initial: "MT",
                color: "bg-blue-100",
              },
              {
                review: "We wanted to add a home office but had no idea where to start. BuildHome connected us with David who not only did beautiful work but also helped us think through the design. The chat feature was so convenient - no more phone tag! Highly recommend.",
                project: "Home Office Addition",
                name: "The Rodriguez Family",
                role: "Verified Homeowner",
                initial: "RF",
                color: "bg-green-100",
              },
            ].map((t) => (
              <div key={t.name}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">

                {/* Quote icon */}
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Quote size={18} className="text-amber-500" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  "{t.review}"
                </p>

                <p className="text-xs font-semibold text-amber-500 mb-4">{t.project}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-gray-700 shrink-0`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-slate-900 text-slate-400 pt-16 pb-8">
        <div className="w-full max-w-screen-xl mx-auto px-8">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center">
                  <Lock size={14} color="#1e293b" />
                </div>
                <span className="text-white font-extrabold text-lg">
                  Build <span className="text-amber-400">Home</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 mb-6 max-w-xs">
                Making home improvement simple, safe, and enjoyable for families everywhere.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#"
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-amber-400 flex items-center justify-center group transition-all">
                    <Icon size={15} className="text-slate-400 group-hover:text-gray-900 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-sm font-bold mb-5">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-xs">
                {["About Us", "Services", "Find Contractors", "Project Gallery", "How It Works"].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-amber-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white text-sm font-bold mb-5">Support</h4>
              <ul className="flex flex-col gap-3 text-xs">
                {["Help Center", "Terms of Service", "Privacy Policy", "Safety Guidelines", "Contact Support"].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-amber-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="text-white text-sm font-bold mb-5">Get in Touch</h4>
              <div className="flex flex-col gap-4 text-xs">
                <a href="mailto:hello@buildhome.com" className="flex items-center gap-2.5 hover:text-amber-400 transition-colors">
                  <div className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={13} className="text-amber-400" />
                  </div>
                  hello@buildhome.com
                </a>
                <a href="tel:18008245466" className="flex items-center gap-2.5 hover:text-amber-400 transition-colors">
                  <div className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={13} className="text-amber-400" />
                  </div>
                  1-800-BUILD-HOME
                </a>
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={13} className="text-amber-400" />
                  </div>
                  <span>123 Construction Ave<br />San Francisco, CA 94102</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
            <p>© 2024 BuildHome. Made with ❤️ for homeowners everywhere. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}