import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  TrendingUp,
  ShoppingBag,
  Store,
  CheckCircle2,
  Star,
  BarChart3,
  Users,
  Award,
  Zap,
  ChevronRight,
  Globe,
  Target,
  LineChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vezura10x | Full-Stack Digital Marketing Agency Germany",
  description:
    "Vezura10x helps businesses 10X their revenue through SEO, Google Ads, Google Merchant Center, and Shopify marketing. Based in Germany, led by Vahid Sediqi.",
  alternates: { canonical: "https://vezura10x.com" },
};

const stats = [
  { value: "10X", label: "Average Revenue Growth", icon: TrendingUp },
  { value: "150+", label: "Clients Served", icon: Users },
  { value: "€8M+", label: "Ad Spend Managed", icon: BarChart3 },
  { value: "97%", label: "Client Retention Rate", icon: Award },
];

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate Google search results with our technical SEO, content strategy, and link building services. We rank your business where customers are searching.",
    href: "/services/seo",
    features: ["Technical SEO Audit", "Keyword Research", "Content Strategy", "Link Building"],
    color: "from-purple-600/20 to-violet-600/10",
    borderHover: "hover:border-purple-500/40",
    iconBg: "bg-purple-600/20 border-purple-500/30",
    iconColor: "text-purple-400",
    tag: "Most Popular",
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    desc: "High-ROI pay-per-click campaigns designed to convert. We manage every aspect from keyword bidding to ad copy, maximizing your ad spend efficiency.",
    href: "/services/google-ads",
    features: ["Search Campaigns", "Display Ads", "Remarketing", "Performance Max"],
    color: "from-cyan-600/20 to-blue-600/10",
    borderHover: "hover:border-cyan-500/40",
    iconBg: "bg-cyan-600/20 border-cyan-500/30",
    iconColor: "text-cyan-400",
    tag: "High ROI",
  },
  {
    icon: Store,
    title: "Google Merchant Center",
    desc: "Complete setup and optimization of your Google Merchant Center account and Shopping campaigns to maximize e-commerce visibility and sales.",
    href: "/services/google-merchant",
    features: ["Product Feed Setup", "Shopping Campaigns", "Feed Optimization", "Price Monitoring"],
    color: "from-orange-600/20 to-amber-600/10",
    borderHover: "hover:border-orange-500/40",
    iconBg: "bg-orange-600/20 border-orange-500/30",
    iconColor: "text-orange-400",
    tag: "E-commerce",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Marketing",
    desc: "End-to-end Shopify growth strategy combining SEO, paid ads, and conversion optimization to scale your Shopify store to new revenue levels.",
    href: "/services/shopify",
    features: ["Store Optimization", "Shopify SEO", "Paid Ads Integration", "CRO"],
    color: "from-green-600/20 to-emerald-600/10",
    borderHover: "hover:border-green-500/40",
    iconBg: "bg-green-600/20 border-green-500/30",
    iconColor: "text-green-400",
    tag: "Shopify",
  },
];

const testimonials = [
  {
    name: "Markus Hoffmann",
    role: "CEO, TechRetail GmbH",
    content:
      "Vezura10x transformed our online presence completely. Within 6 months, our organic traffic tripled and our Google Ads ROAS went from 2x to 8x. Vahid really knows his craft.",
    rating: 5,
    result: "+320% organic traffic",
  },
  {
    name: "Sarah Klein",
    role: "Owner, Fashion Boutique Berlin",
    content:
      "Our Shopify store was barely making €5k/month. After 3 months with Vezura10x, we consistently hit €50k+ monthly revenue. The Google Shopping setup alone was a game changer.",
    rating: 5,
    result: "10X monthly revenue",
  },
  {
    name: "Thomas Bauer",
    role: "Marketing Director, SportEquip AG",
    content:
      "The SEO results speak for themselves — page 1 rankings for 45+ competitive keywords in under 6 months. Vahid's team is professional, transparent, and delivers on every promise.",
    rating: 5,
    result: "45+ page 1 rankings",
  },
];

const process = [
  {
    step: "01",
    title: "Free Strategy Audit",
    desc: "We analyze your current digital presence, competitors, and opportunities. You get a detailed audit report — no cost, no obligation.",
    icon: Target,
  },
  {
    step: "02",
    title: "Custom Growth Plan",
    desc: "Based on the audit, we build a tailored digital marketing strategy with clear milestones, KPIs, and ROI projections.",
    icon: LineChart,
  },
  {
    step: "03",
    title: "Execution & Optimization",
    desc: "Our team executes the strategy, continuously monitoring and optimizing every campaign and SEO effort for maximum performance.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Scale & Report",
    desc: "We scale what works, provide transparent monthly reports, and adapt the strategy as your business grows toward 10X revenue.",
    icon: TrendingUp,
  },
];

const trustedBy = [
  "E-commerce Store", "SaaS Company", "Retail Brand", "B2B Agency", "Fashion Label", "Tech Startup",
];

export default function HomePage() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "700px", height: "700px", top: "-200px", left: "-200px", animationDuration: "10s" }} />
        <div className="orb orb-cyan" style={{ width: "500px", height: "500px", top: "40%", right: "-100px", animationDelay: "3s", animationDuration: "12s" }} />
        <div className="orb orb-orange" style={{ width: "400px", height: "400px", bottom: "20%", left: "30%", animationDelay: "6s", opacity: 0.08 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/30 via-[#050510]/60 to-[#050510]" />
      </div>

      <div className="relative z-10">
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="badge">🇩🇪 Based in Germany</span>
                <span className="badge">Full-Stack Digital Marketing</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
                We help businesses{" "}
                <span className="gradient-text">10X their revenue</span>{" "}
                through digital marketing
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Vezura10x is a full-stack digital marketing agency based in Germany. We combine
                SEO, Google Ads, Google Merchant Center, and Shopify expertise to drive explosive
                growth for small and large businesses alike.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <Link
                  href="/contact"
                  className="btn-primary px-7 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2.5 w-full sm:w-auto justify-center"
                >
                  Get Free Strategy Audit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-secondary px-7 py-4 rounded-2xl font-semibold text-base inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  View Our Results
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </Link>
              </div>

              {/* Social proof strip */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
                {[
                  "150+ businesses grown",
                  "€8M+ ad spend managed",
                  "97% client retention",
                  "No long-term contracts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="mt-16 relative">
              <div className="relative max-w-5xl mx-auto">
                {/* Main dashboard card */}
                <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/[0.08]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 h-7 bg-white/[0.05] rounded-lg flex items-center px-3">
                      <span className="text-slate-500 text-xs">vezura10x.com/dashboard</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div key={stat.label} className="glass-card rounded-xl p-4 text-center border border-white/[0.06]">
                          <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                          <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
                          <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mini chart */}
                  <div className="mt-4 glass-card rounded-xl p-4 border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-slate-400 text-xs font-medium">Revenue Growth (Client Average)</span>
                      <span className="text-green-400 text-xs font-semibold bg-green-400/10 px-2 py-0.5 rounded-full">↑ 10X</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[20, 28, 35, 42, 38, 55, 68, 75, 82, 95, 100, 100].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm transition-all"
                          style={{
                            height: `${h}%`,
                            background: `linear-gradient(to top, rgba(124,58,237,${0.4 + i * 0.05}), rgba(6,182,212,0.3))`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-600 text-xs">Month 1</span>
                      <span className="text-slate-600 text-xs">Month 12</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 hidden md:block glass-card rounded-xl px-4 py-3 border border-purple-500/20 shadow-glow animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-xs font-semibold">ROAS 8.5x achieved</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 hidden md:block glass-card rounded-xl px-4 py-3 border border-cyan-500/20 animate-float-delay">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-white text-xs font-semibold">+320% organic traffic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUSTED BY ── */}
        <section className="py-12 border-y border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-widest font-medium">
              Trusted by businesses across Germany & Europe
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trustedBy.map((name) => (
                <div
                  key={name}
                  className="glass-card px-5 py-2.5 rounded-xl border border-white/[0.06] text-slate-400 text-sm font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="section-pad" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="badge mb-4">Our Services</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Everything you need to{" "}
                <span className="gradient-text">dominate online</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                From search visibility to paid advertising and e-commerce growth — we cover
                every channel that drives revenue for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`glass-card glass-card-hover ${service.borderHover} rounded-2xl p-7 block group border border-white/[0.06]`}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className={`service-icon border ${service.iconBg} bg-gradient-to-br ${service.color}`}>
                        <Icon className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                      <span className="tag-pill">{service.tag}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.desc}</p>

                    <ul className="grid grid-cols-2 gap-2 mb-5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-1.5 text-slate-400 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1.5 text-purple-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section-pad bg-gradient-to-b from-transparent to-[#0a0a1a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="badge mb-4">How We Work</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Your path to{" "}
                <span className="gradient-text">10X growth</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                A proven, transparent process that consistently delivers results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="glass-card rounded-2xl p-6 border border-white/[0.06] relative group hover:border-purple-500/30 transition-all">
                    <div className="absolute top-4 right-4 text-5xl font-black text-white/[0.04] select-none">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-violet-600/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:border-purple-500/40 transition-all">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    {i < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-purple-600/20 border border-purple-500/30 z-10" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="badge mb-4">Client Results</span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Real businesses,{" "}
                <span className="gradient-text">real results</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Don&apos;t take our word for it — hear from businesses we&apos;ve helped grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="testimonial-card group">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center text-white text-sm font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{t.name}</p>
                        <p className="text-slate-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">
                      {t.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/case-studies"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
              >
                View All Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── ABOUT VAHID ── */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <div className="relative order-2 lg:order-1">
                <div className="relative">
                  <div className="glass-card rounded-2xl p-8 border border-white/[0.08]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center text-white text-2xl font-black shadow-glow">
                        V
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Vahid Sediqi</h3>
                        <p className="text-purple-400 text-sm">Founder & Lead Strategist</p>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span className="text-slate-500 text-xs">Germany</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Years Experience", value: "8+" },
                        { label: "Clients Grown", value: "150+" },
                        { label: "Ad Budget Managed", value: "€8M+" },
                        { label: "Avg Revenue Growth", value: "10X" },
                      ].map((item) => (
                        <div key={item.label} className="glass-card rounded-xl p-4 border border-white/[0.05] text-center">
                          <div className="text-2xl font-black text-white mb-1">{item.value}</div>
                          <div className="text-xs text-slate-500">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -right-5 glass-card rounded-xl p-4 border border-cyan-500/20 hidden md:block animate-float-delay-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span className="text-white text-xs font-semibold">Germany-based, Global reach</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <span className="badge mb-4">Meet the Founder</span>
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
                  Led by{" "}
                  <span className="gradient-text">Vahid Sediqi</span>,<br />
                  a results-driven strategist
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  Vahid Sediqi founded Vezura10x with one mission: to make enterprise-level
                  digital marketing accessible to every business. With over 8 years of
                  experience managing campaigns across Germany and Europe, he combines deep
                  technical expertise with a relentless focus on ROI.
                </p>
                <p className="text-slate-400 leading-relaxed mb-8">
                  From bootstrapped startups to established enterprises, Vahid has helped over
                  150 businesses achieve remarkable growth. His approach is simple: data-driven
                  strategy, transparent communication, and a commitment to exceeding targets.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Google Ads & Analytics Certified",
                    "Shopify Partner Program Member",
                    "8+ years hands-on experience",
                    "Bilingual: German & English",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/about"
                    className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2"
                  >
                    Learn More About Vahid
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:Vahid@vezura10x.com"
                    className="btn-secondary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Vahid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-violet-900/20 to-cyan-900/20" />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="relative p-10 md:p-16 text-center">
                <div className="inline-flex items-center gap-2 mb-6 bg-purple-600/20 border border-purple-500/30 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-purple-300 text-sm font-medium">Currently accepting new clients</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
                  Ready to{" "}
                  <span className="gradient-text">10X your revenue?</span>
                </h2>

                <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
                  Get a free, no-obligation digital marketing audit. We&apos;ll analyze your
                  business and show you exactly how to grow.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary px-8 py-4 rounded-2xl font-bold text-base inline-flex items-center gap-2.5 w-full sm:w-auto justify-center"
                  >
                    Book Free Strategy Audit
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="mailto:Vahid@vezura10x.com"
                    className="btn-secondary px-8 py-4 rounded-2xl font-bold text-base inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <Mail className="w-5 h-5" />
                    Vahid@vezura10x.com
                  </a>
                </div>

                <p className="text-slate-500 text-sm">
                  No contracts · No hidden fees · Results guaranteed
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
