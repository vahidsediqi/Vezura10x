import Link from "next/link";
import { Zap, Mail, MapPin, ArrowRight, Linkedin, Twitter, Instagram } from "lucide-react";

const services = [
  { label: "SEO Optimization", href: "/services/seo" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Google Merchant Center", href: "/services/google-merchant" },
  { label: "Shopify Marketing", href: "/services/shopify" },
  { label: "All Services", href: "/services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Imprint", href: "/imprint" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050510] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Newsletter CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="rounded-2xl bg-gradient-to-r from-purple-600/10 via-violet-600/5 to-cyan-600/10 border border-white/[0.08] p-8 md:p-10 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to 10X your revenue?
              </h3>
              <p className="text-slate-400 text-sm">
                Book a free strategy audit call with Vahid. No commitment required.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              Book Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4 w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">Vezura</span>
                <span className="text-purple-400 font-black text-sm leading-none tracking-tight">10x</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Full-stack digital marketing agency based in Germany. We help businesses
              of all sizes 10X their revenue through data-driven strategies.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="mailto:Vahid@vezura10x.com"
                className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group text-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-purple-600/20 group-hover:border-purple-500/30 transition-all">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                Vahid@vezura10x.com
              </a>
              <div className="flex items-center gap-2.5 text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                Germany
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Vezura10x. All rights reserved. Crafted with precision in Germany.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span>Led by</span>
            <span className="text-purple-400 font-medium">Vahid Sediqi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
