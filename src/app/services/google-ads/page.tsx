import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Target,
  BarChart3,
  Zap,
  Users,
  Star,
  DollarSign,
  MousePointer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Ads Management Germany | High-ROI PPC Campaigns – Vezura10x",
  description:
    "Expert Google Ads management in Germany. We build and optimize high-ROI Search, Shopping, Display, and Performance Max campaigns. Average ROAS 6-9x.",
  keywords: [
    "Google Ads agency Germany",
    "PPC management Germany",
    "Google Ads expert Germany",
    "Google Ads management Berlin",
    "Google Ads optimization Germany",
    "PPC campaigns Germany",
    "Google Ads specialist Vahid Sediqi",
  ],
  alternates: { canonical: "https://vezura10x.com/services/google-ads" },
  openGraph: {
    title: "Google Ads Management Germany | Vezura10x",
    description: "High-ROI Google Ads campaigns. Average ROAS 6-9x. Expert PPC management across Germany.",
  },
};

const adTypes = [
  {
    icon: Target,
    title: "Search Campaigns",
    desc: "Capture high-intent searches from customers actively looking for your products or services. We craft compelling ads matched to precise keyword targeting.",
    items: ["Keyword strategy & bid management", "Ad copy A/B testing", "Quality Score optimization", "Negative keyword management", "Ad extension setup", "Match type strategy"],
  },
  {
    icon: BarChart3,
    title: "Performance Max",
    desc: "Google's most powerful campaign type, using AI to show ads across all Google channels. We configure and optimize PMax to drive conversions efficiently.",
    items: ["Asset group creation", "Audience signal setup", "Product feed integration", "Budget allocation strategy", "Conversion goal setup", "Performance monitoring"],
  },
  {
    icon: MousePointer,
    title: "Shopping Ads",
    desc: "Get your products front-and-center when buyers search. Shopping ads drive high-intent traffic at efficient CPCs with product images and prices visible.",
    items: ["Smart Shopping campaigns", "Standard Shopping optimization", "Product group structuring", "Bid optimization", "Competitor price tracking", "Feed synchronization"],
  },
  {
    icon: Users,
    title: "Remarketing & Display",
    desc: "Re-engage website visitors and reach new audiences with precision-targeted Display and YouTube campaigns that keep your brand top of mind.",
    items: ["Custom audience creation", "Dynamic remarketing", "Display campaign design", "YouTube video ads", "Customer match campaigns", "Lookalike audiences"],
  },
];

const metrics = [
  { value: "6-9x", label: "Average ROAS", icon: DollarSign, color: "text-green-400" },
  { value: "-40%", label: "CPC reduction", icon: TrendingUp, color: "text-cyan-400" },
  { value: "+200%", label: "Conversion increase", icon: Target, color: "text-purple-400" },
  { value: "€8M+", label: "Ad spend managed", icon: BarChart3, color: "text-orange-400" },
];

export default function GoogleAdsPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-cyan" style={{ width: "600px", height: "600px", top: "0", right: "-150px", animationDuration: "9s" }} />
        <div className="orb orb-purple" style={{ width: "400px", height: "400px", bottom: "20%", left: "-50px", animationDelay: "3s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/50 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* Hero */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="badge">Google Ads</span>
                <span className="tag-pill">High ROI</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
                Google Ads that{" "}
                <span className="gradient-text">actually convert</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Stop burning ad budget on campaigns that underperform. Vezura10x builds and
                manages Google Ads campaigns engineered for maximum ROI — with average ROAS of
                6-9x across our client portfolio. Every euro you spend works harder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                  Get Free Ads Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                  View Ad Results <TrendingUp className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Search Ads", "Shopping Ads", "Display", "Performance Max", "Remarketing"].map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">Campaign Performance</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label} className="glass-card rounded-xl p-4 border border-white/[0.06] text-center">
                      <Icon className={`w-5 h-5 ${m.color} mx-auto mb-2`} />
                      <div className="text-3xl font-black text-white mb-1">{m.value}</div>
                      <div className="text-xs text-slate-500 leading-tight">{m.label}</div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 to-blue-600/5 border border-cyan-500/20">
                <p className="text-white text-sm font-medium">Latest win: 8.5x ROAS achieved</p>
                <p className="text-slate-400 text-xs">Retail client, €50k/month ad spend</p>
              </div>
            </div>
          </div>
        </section>

        {/* What we manage */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="badge mb-4">Campaign Types</span>
              <h2 className="text-4xl font-black text-white mb-4">
                Full-funnel Google Ads{" "}
                <span className="gradient-text">coverage</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adTypes.map((ad) => {
                const Icon = ad.icon;
                return (
                  <div key={ad.title} className="glass-card rounded-2xl p-7 border border-white/[0.06] hover:border-cyan-500/30 transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="service-icon bg-cyan-600/20 border-cyan-500/30">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{ad.title}</h3>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{ad.desc}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                      {ad.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-slate-400 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
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

        {/* Why us */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/[0.06]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="badge mb-4">Why Vezura10x?</span>
                  <h2 className="text-3xl font-black text-white mb-5">
                    We manage your budget like it&apos;s our own money
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Most agencies charge a percentage of ad spend, incentivizing them to spend
                    more — not perform better. At Vezura10x, our fee structure is tied to
                    performance. When you win, we win.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Dedicated campaign manager (Vahid personally involved)",
                      "Weekly performance reports — no surprises",
                      "Transparent, no-markup pricing on ad spend",
                      "Google Ads certified team",
                      "No lock-in contracts",
                      "Monthly strategy reviews",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="testimonial-card">
                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                      &ldquo;Our previous agency was spending €20k/month with a 2.5x ROAS. Vahid
                      restructured everything and within 3 months we were at 8.5x ROAS on the
                      same budget. The ROI speaks for itself.&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white text-sm font-bold">M</div>
                        <div>
                          <p className="text-white text-sm font-semibold">Markus Hoffmann</p>
                          <p className="text-slate-500 text-xs">CEO, TechRetail GmbH</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full">8.5x ROAS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Stop wasting ad budget.{" "}
              <span className="gradient-text">Start scaling.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Get a free audit of your existing Google Ads account (or a new strategy if
              you&apos;re starting fresh). No commitment required.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2">
              Get Free Google Ads Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
