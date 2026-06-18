import AuthLeftPanel from "../components/auth/authLeftPanel";

interface BaseAuthLayoutProps {
    children: React.ReactNode
}

export default function BaseAuthLayout({ children }: BaseAuthLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden font-sans bg-gray-50">
      <AuthLeftPanel />
      {/* Right side — centers whatever page passes as children */}
      <div className="flex flex-1 lg:w-1/2 items-center justify-center px-6">
        {children}
      </div>
    </div>
  );
}