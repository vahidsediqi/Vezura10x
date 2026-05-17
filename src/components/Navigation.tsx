"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  TrendingUp,
  ShoppingBag,
  Store,
  ChevronDown,
  Menu,
  X,
  Zap,
  ArrowRight,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate search rankings with technical & content SEO",
    href: "/services/seo",
    tag: "Most Popular",
    color: "from-purple-500/20 to-violet-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    desc: "High-ROI campaigns that convert clicks to customers",
    href: "/services/google-ads",
    tag: "High ROI",
    color: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: Store,
    title: "Google Merchant Center",
    desc: "Full setup & optimization for Shopping campaigns",
    href: "/services/google-merchant",
    tag: "E-commerce",
    color: "from-orange-500/20 to-amber-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Marketing",
    desc: "Scale your Shopify store to new revenue heights",
    href: "/services/shopify",
    tag: "Shopify",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
  },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050510]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                  <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">Vezura</span>
                <span className="text-purple-400 font-black text-sm leading-none tracking-tight">10x</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services mega menu trigger */}
              <div className="relative">
                <button
                  ref={triggerRef}
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    megaMenuOpen || pathname.startsWith("/services")
                      ? "text-white bg-white/[0.08]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega Menu */}
                {megaMenuOpen && (
                  <div
                    ref={menuRef}
                    className="mega-menu animate-fade-in"
                    role="menu"
                  >
                    {/* Header */}
                    <div className="mb-5 pb-4 border-b border-white/[0.06]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-1">
                            Our Services
                          </p>
                          <p className="text-white font-semibold text-base">
                            Full-stack digital marketing solutions
                          </p>
                        </div>
                        <Link
                          href="/services"
                          className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors group"
                        >
                          View all
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Services grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            role="menuitem"
                            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-200"
                          >
                            <div className={`service-icon bg-gradient-to-br ${service.color}`}>
                              <Icon className={`w-5 h-5 ${service.iconColor}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-white text-sm font-semibold group-hover:text-purple-300 transition-colors">
                                  {service.title}
                                </span>
                                <span className="text-xs px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20 whitespace-nowrap">
                                  {service.tag}
                                </span>
                              </div>
                              <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                                {service.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* CTA */}
                    <div className="rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/10 border border-purple-500/20 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">Free audit & strategy call</p>
                          <p className="text-slate-400 text-xs">Find out how to 10X your revenue</p>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="flex-shrink-0 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-white bg-white/[0.08]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
              >
                Get Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/[0.08] transition-colors text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#050510]/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div
          className={`absolute top-16 left-0 right-0 bottom-0 overflow-y-auto transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="px-4 py-6 space-y-2">
            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white font-medium hover:bg-white/[0.05] transition-colors"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="ml-4 space-y-1">
                <Link
                  href="/services"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-purple-400 font-semibold hover:bg-white/[0.05] text-sm"
                >
                  All Services
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      <Icon className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium">{service.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white bg-white/[0.08]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="flex items-center px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] font-medium transition-colors"
            >
              Contact
            </Link>

            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                Get Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
