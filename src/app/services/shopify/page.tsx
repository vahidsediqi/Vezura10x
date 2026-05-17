import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  BarChart3,
  Zap,
  Star,
  MousePointer,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Marketing Agency Germany | Scale Your Shopify Store – Vezura10x",
  description:
    "Expert Shopify marketing in Germany. SEO, Google Ads, conversion optimization, and full-funnel growth strategies that take Shopify stores to 10X revenue.",
  keywords: [
    "Shopify marketing Germany",
    "Shopify SEO Germany",
    "Shopify agency Germany",
    "Shopify growth Germany",
    "Shopify Google Ads Germany",
    "Shopify store optimization Germany",
    "ecommerce marketing Germany",
  ],
  alternates: { canonical: "https://vezura10x.com/services/shopify" },
};

const shopifyServices = [
  {
    icon: Search,
    title: "Shopify SEO",
    desc: "Shopify has unique SEO challenges — duplicate content, URL structures, pagination. We understand the platform deeply and optimize for sustainable organic growth.",
    items: ["Technical Shopify SEO audit", "Collection & product page optimization", "Blog strategy for authority", "Schema markup", "Speed optimization", "Structured data"],
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    desc: "Google Shopping, Search, and Meta ads managed together as a unified acquisition system, targeting customers at every stage of the buying journey.",
    items: ["Google Shopping campaigns", "Search ads", "Meta (Facebook/Instagram) ads", "Dynamic remarketing", "Audience segmentation", "ROAS optimization"],
  },
  {
    icon: MousePointer,
    title: "Conversion Rate Optimization",
    desc: "Getting traffic is only half the battle. We optimize your Shopify store's UX, product pages, and checkout flow to convert more visitors into buyers.",
    items: ["Store UX audit", "Product page optimization", "Checkout flow improvements", "A/B testing", "Trust signals", "Mobile optimization"],
  },
  {
    icon: Mail,
    title: "Email & Retention Marketing",
    desc: "Acquire once, sell repeatedly. We set up email automations that recover abandoned carts, nurture customers, and drive repeat purchases to maximize LTV.",
    items: ["Klaviyo / Mailchimp setup", "Abandoned cart sequences", "Post-purchase flows", "Welcome series", "Segmentation strategy", "Campaign management"],
  },
];

const results = [
  { value: "10X", label: "Average revenue growth" },
  { value: "€50k+", label: "Monthly revenue achieved" },
  { value: "+180%", label: "Avg conversion rate increase" },
  { value: "3.5x", label: "LTV improvement" },
];

const caseHighlight = {
  client: "Fashion Boutique Berlin",
  before: "€5,000/month revenue",
  after: "€52,000/month revenue",
  timeframe: "4 months",
  quote: "We went from barely covering overheads to having to hire more staff to manage orders. Vezura10x changed everything.",
  name: "Sarah Klein",
};

export default function ShopifyPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "500px", height: "500px", top: "5%", right: "-100px", animationDuration: "11s" }} />
        <div className="orb orb-cyan" style={{ width: "400px", height: "400px", bottom: "25%", left: "-80px", animationDelay: "5s", opacity: 0.1 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/50 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* Hero */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="badge">Shopify Marketing</span>
                <span className="tag-pill text-green-300 bg-green-500/10 border-green-500/20">Shopify Partner</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
                Scale your Shopify store{" "}
                <span className="gradient-text">to new heights</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                A great Shopify store needs more than a beautiful theme. It needs a
                complete marketing system driving targeted traffic, converting visitors, and
                retaining customers. Vezura10x builds that system — and the results speak
                for themselves: average 10X revenue growth across our Shopify client base.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                  Grow My Shopify Store <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                  Shopify Case Studies <TrendingUp className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Shopify SEO", "Google Shopping", "Meta Ads", "Email Marketing", "CRO"].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                <ShoppingBag className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">Shopify Growth Results</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {results.map((r) => (
                  <div key={r.label} className="glass-card rounded-xl p-4 border border-white/[0.06] text-center">
                    <div className="text-3xl font-black text-white mb-1">{r.value}</div>
                    <div className="text-xs text-slate-500 leading-tight">{r.label}</div>
                  </div>
                ))}
              </div>
              {/* Revenue comparison */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-600/10 to-emerald-600/5 border border-green-500/20">
                <p className="text-green-400 text-xs font-semibold mb-2">Client spotlight</p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-slate-400 text-xs">Before</p>
                    <p className="text-white font-bold">{caseHighlight.before}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-slate-400 text-xs">After (4 months)</p>
                    <p className="text-green-400 font-bold">{caseHighlight.after}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="badge mb-4">The Shopify Growth System</span>
              <h2 className="text-4xl font-black text-white mb-4">
                Every channel working{" "}
                <span className="gradient-text">together</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Unlike agencies that offer only one or two channels, we build a complete
                integrated growth system across SEO, paid, and owned media.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shopifyServices.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="glass-card rounded-2xl p-7 border border-white/[0.06] hover:border-green-500/30 transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="service-icon bg-green-600/20 border-green-500/30">
                        <Icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{s.title}</h3>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {s.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-slate-400 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
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

        {/* Case highlight */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-green-500/20 bg-gradient-to-br from-green-600/10 to-emerald-600/5">
              <span className="badge mb-4" style={{ background: "rgba(16,185,129,0.15)", borderColor: "rgba(16,185,129,0.3)", color: "#6ee7b7" }}>
                Case Study
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-slate-400 text-xs mb-1">Before</p>
                  <p className="text-white text-2xl font-black">{caseHighlight.before}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <ArrowRight className="w-8 h-8 text-green-400 mx-auto mb-1" />
                    <p className="text-green-400 text-xs font-semibold">{caseHighlight.timeframe}</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-slate-400 text-xs mb-1">After</p>
                  <p className="text-green-400 text-2xl font-black">{caseHighlight.after}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-4">&ldquo;{caseHighlight.quote}&rdquo;</p>
              <p className="text-white text-sm font-semibold">{caseHighlight.name}</p>
              <p className="text-slate-500 text-xs">{caseHighlight.client}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Your Shopify store deserves{" "}
              <span className="gradient-text">better results</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Get a free Shopify audit. We&apos;ll analyze your store, traffic, and conversion
              funnel, then show you the fastest path to 10X revenue.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2">
              Get Free Shopify Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
