import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "500px", height: "500px", top: "10%", left: "10%", opacity: 0.12 }} />
        <div className="orb orb-cyan" style={{ width: "400px", height: "400px", bottom: "10%", right: "10%", opacity: 0.08, animationDelay: "3s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/50 to-[#050510]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
        <div className="text-8xl font-black text-white/[0.06] mb-4 select-none">404</div>
        <h1 className="text-4xl font-black text-white mb-4">Page not found</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 justify-center">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 justify-center">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
