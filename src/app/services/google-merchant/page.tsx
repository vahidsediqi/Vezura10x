import type { Metadata } from "next";
import Link from "next/link";
import {
  Store,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Package,
  Settings,
  BarChart3,
  Star,
  ShoppingCart,
  Tag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Merchant Center Setup Germany | Shopping Campaigns – Vezura10x",
  description:
    "Professional Google Merchant Center setup and optimization in Germany. Product feed creation, Shopping campaign management, and e-commerce growth strategies.",
  keywords: [
    "Google Merchant Center Germany",
    "Google Shopping Germany",
    "Merchant Center setup Germany",
    "Shopping campaigns Germany",
    "product feed optimization Germany",
    "Google Shopping ads Germany",
  ],
  alternates: { canonical: "https://vezura10x.com/services/google-merchant" },
};

const services = [
  {
    icon: Settings,
    title: "Account Setup & Verification",
    desc: "Complete Google Merchant Center account creation, business verification, website claim, and initial configuration for your e-commerce business.",
    items: ["Business verification", "Website claim & verification", "Shipping & tax settings", "Return policy setup", "Business information", "Identity verification"],
  },
  {
    icon: Package,
    title: "Product Feed Creation & Optimization",
    desc: "A well-optimized product feed is the foundation of successful Shopping ads. We build and continuously optimize feeds that maximize impression share and CTR.",
    items: ["Feed creation (XML/CSV/API)", "Title & description optimization", "Image quality review", "GTIN & MPN setup", "Category mapping", "Custom label strategy"],
  },
  {
    icon: BarChart3,
    title: "Shopping Campaign Management",
    desc: "We set up, manage, and optimize Google Shopping campaigns to maximize ROAS and sales volume while keeping cost-per-acquisition profitable.",
    items: ["Standard Shopping campaigns", "Smart Shopping migration", "Performance Max integration", "Bid strategy optimization", "Product segmentation", "Competitive benchmarking"],
  },
  {
    icon: Tag,
    title: "Feed Health & Error Resolution",
    desc: "Disapproved products and feed errors kill campaign performance. We monitor and resolve Merchant Center diagnostics to keep your products eligible and showing.",
    items: ["Daily feed monitoring", "Disapproval resolution", "Policy compliance review", "Automatic feed refresh", "Data quality scoring", "Benchmark reporting"],
  },
];

const stats = [
  { value: "+250%", label: "Avg Shopping revenue increase" },
  { value: "2-4 wk", label: "Time to go live" },
  { value: "98%", label: "Product approval rate" },
  { value: "5x", label: "Avg ROAS on Shopping" },
];

const setupProcess = [
  { step: "01", title: "Account Audit / Setup", desc: "Whether you have an existing account or need a new one, we start with a full diagnostic." },
  { step: "02", title: "Feed Creation", desc: "We build or optimize your product data feed to meet Google's requirements and maximize performance." },
  { step: "03", title: "Campaign Launch", desc: "Shopping campaigns go live with optimized structure, bidding, and product segmentation." },
  { step: "04", title: "Ongoing Optimization", desc: "Continuous monitoring, feed refreshes, bid optimization, and performance reporting." },
];

export default function GoogleMerchantPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-orange" style={{ width: "600px", height: "600px", top: "0", left: "-100px", animationDuration: "10s", opacity: 0.12 }} />
        <div className="orb orb-purple" style={{ width: "450px", height: "450px", bottom: "15%", right: "-80px", animationDelay: "4s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/50 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* Hero */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="badge">Google Merchant Center</span>
                <span className="tag-pill">E-commerce</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
                Get your products in{" "}
                <span className="gradient-text">front of buyers</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Google Shopping is where e-commerce transactions start. Vezura10x provides
                complete Google Merchant Center setup and management — from feed creation to
                Shopping campaign optimization — so your products appear prominently when
                high-intent shoppers are ready to buy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                  Get Merchant Center Setup <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                  See Results <TrendingUp className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Product Feeds", "Shopping Ads", "Free Listings", "Performance Max"].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                <Store className="w-5 h-5 text-orange-400" />
                <span className="text-white font-semibold">Merchant Center Results</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="glass-card rounded-xl p-4 border border-white/[0.06] text-center">
                    <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                    <div className="text-xs text-slate-500 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-orange-600/10 to-amber-600/5 border border-orange-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <ShoppingCart className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-300 text-xs font-semibold">Latest result</span>
                </div>
                <p className="text-white text-sm font-medium">+250% Shopping revenue in 4 months</p>
                <p className="text-slate-400 text-xs">Fashion e-commerce brand, Germany</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="badge mb-4">What We Deliver</span>
              <h2 className="text-4xl font-black text-white mb-4">
                Complete Merchant Center{" "}
                <span className="gradient-text">management</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="glass-card rounded-2xl p-7 border border-white/[0.06] hover:border-orange-500/30 transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="service-icon bg-orange-600/20 border-orange-500/30">
                        <Icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{s.title}</h3>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {s.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-slate-400 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-3">From setup to sales in 4 steps</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {setupProcess.map((p) => (
                <div key={p.step} className="glass-card rounded-2xl p-6 border border-white/[0.06] relative text-center hover:border-orange-500/30 transition-all">
                  <div className="text-5xl font-black text-white/[0.04] absolute top-3 right-4 select-none">{p.step}</div>
                  <div className="text-purple-400 font-bold text-sm mb-2">{p.step}</div>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="testimonial-card text-center">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-white text-xl font-medium leading-relaxed mb-6 italic">
                &ldquo;Our Merchant Center was a mess — hundreds of disapproved products and
                barely any Shopping impressions. Vezura10x fixed everything in 2 weeks and
                our Shopping revenue jumped 250% the following month.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold">S</div>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">Sarah Klein</p>
                  <p className="text-slate-500 text-xs">Owner, Fashion Boutique Berlin</p>
                </div>
                <span className="ml-4 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">+250% Shopping revenue</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Put your products in front of{" "}
              <span className="gradient-text">ready-to-buy shoppers</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Whether you need a full Merchant Center setup or optimization of an existing
              account, we&apos;ll get your products performing.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2">
              Start Merchant Center Setup
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
