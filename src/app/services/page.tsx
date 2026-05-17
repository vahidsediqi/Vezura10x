import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  Store,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, Google Ads, Shopify – Vezura10x",
  description:
    "Full-stack digital marketing services: SEO optimization, Google Ads management, Google Merchant Center setup, and Shopify marketing. Based in Germany.",
  keywords: [
    "digital marketing services Germany",
    "SEO services Germany",
    "Google Ads agency Germany",
    "Shopify marketing Germany",
    "Google Merchant Center Germany",
  ],
  alternates: { canonical: "https://vezura10x.com/services" },
};

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    shortDesc: "Rank higher, drive more organic traffic, and generate consistent leads without paying per click.",
    desc: "Our comprehensive SEO service covers every aspect of search engine optimization — technical foundations, compelling content, and authoritative link building. We work methodically to improve your rankings for the keywords your customers are actually searching.",
    href: "/services/seo",
    features: [
      "Full technical SEO audit & fixes",
      "In-depth keyword research",
      "Content strategy & creation",
      "Authority link building",
      "Core Web Vitals optimization",
      "Monthly ranking reports",
    ],
    result: "+320% avg. organic traffic",
    color: "from-purple-600/20 to-violet-600/5",
    iconBg: "from-purple-600 to-violet-700",
    tag: "Most Popular",
    timeframe: "Results in 3-6 months",
  },
  {
    icon: TrendingUp,
    title: "Google Ads Management",
    shortDesc: "Convert intent-rich searches into customers with expertly managed, high-ROI PPC campaigns.",
    desc: "We design, launch, and continually optimize Google Ads campaigns that deliver measurable returns. From keyword bidding strategies to compelling ad copy and landing page alignment, every element is engineered for maximum conversion efficiency.",
    href: "/services/google-ads",
    features: [
      "Search & Display campaigns",
      "Performance Max campaigns",
      "Shopping ads",
      "Remarketing & retargeting",
      "A/B ad copy testing",
      "Conversion tracking setup",
    ],
    result: "Avg. ROAS 6-9x",
    color: "from-cyan-600/20 to-blue-600/5",
    iconBg: "from-cyan-600 to-blue-600",
    tag: "High ROI",
    timeframe: "Results within weeks",
  },
  {
    icon: Store,
    title: "Google Merchant Center",
    shortDesc: "Get your products in front of high-intent shoppers through Google Shopping campaigns.",
    desc: "A properly configured and optimized Google Merchant Center account is the foundation of profitable e-commerce advertising. We handle everything from feed creation and diagnostic fixes to Shopping campaign management and competitive price monitoring.",
    href: "/services/google-merchant",
    features: [
      "Account creation & verification",
      "Product feed setup & optimization",
      "Shopping campaign management",
      "Feed error resolution",
      "Price & competitive analysis",
      "Free Listings optimization",
    ],
    result: "+250% Shopping revenue",
    color: "from-orange-600/20 to-amber-600/5",
    iconBg: "from-orange-500 to-amber-600",
    tag: "E-commerce",
    timeframe: "Live in 2-4 weeks",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Marketing",
    shortDesc: "Scale your Shopify store with a holistic growth strategy across SEO, ads, and conversion optimization.",
    desc: "Shopify success requires more than a beautiful store — it needs a complete marketing system. We combine Shopify-specific SEO, targeted Google and Meta ads, email marketing, and conversion rate optimization to build a predictable revenue machine.",
    href: "/services/shopify",
    features: [
      "Shopify SEO optimization",
      "Google & Meta ad campaigns",
      "Conversion rate optimization",
      "Email marketing setup",
      "Product page optimization",
      "Analytics & tracking",
    ],
    result: "Avg. 10X revenue growth",
    color: "from-green-600/20 to-emerald-600/5",
    iconBg: "from-green-600 to-emerald-600",
    tag: "Shopify",
    timeframe: "Results in 60-90 days",
  },
];

const process = [
  { icon: Target, step: "01", title: "Discovery & Audit", desc: "We start with a thorough audit of your current digital presence and competitive landscape." },
  { icon: BarChart3, step: "02", title: "Strategy & Plan", desc: "A custom roadmap with clear KPIs, timelines, and expected outcomes is built for your business." },
  { icon: Zap, step: "03", title: "Execution", desc: "Our team implements the strategy with precision — every technical detail, every campaign element." },
  { icon: TrendingUp, step: "04", title: "Optimize & Scale", desc: "Continuous monitoring, reporting, and optimization to maximize results as we scale together." },
];

export default function ServicesPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "600px", height: "600px", top: "5%", left: "-100px", animationDuration: "11s" }} />
        <div className="orb orb-cyan" style={{ width: "500px", height: "500px", bottom: "10%", right: "-100px", animationDelay: "4s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* Hero */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-4">Our Services</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
            Full-stack digital marketing{" "}
            <span className="gradient-text">that delivers</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-8">
            From search visibility to paid acquisition and e-commerce growth — we cover
            every digital channel that matters for your business revenue.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-7 py-4 rounded-2xl font-bold inline-flex items-center gap-2"
          >
            Get Free Service Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* Services */}
        <section className="section-pad max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.href}
                  className={`glass-card rounded-2xl border border-white/[0.06] overflow-hidden hover:border-purple-500/25 transition-all group`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Content */}
                    <div className={`p-8 md:p-10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center shadow-glow flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="tag-pill">{service.tag}</span>
                          <span className="text-xs text-slate-500">{service.timeframe}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-slate-400 leading-relaxed mb-4">{service.desc}</p>
                      <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full mb-6">
                        <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400 text-xs font-semibold">{service.result}</span>
                      </div>
                      <Link
                        href={service.href}
                        className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Features */}
                    <div className={`p-8 md:p-10 bg-gradient-to-br ${service.color} border-t lg:border-t-0 ${i % 2 === 1 ? "lg:order-1 lg:border-r border-white/[0.05]" : "lg:border-l border-white/[0.05]"}`}>
                      <h3 className="text-white font-semibold mb-5">What&apos;s included:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300 text-sm">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="badge mb-4">Our Process</span>
              <h2 className="text-4xl font-black text-white mb-4">How we deliver results</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="glass-card rounded-2xl p-6 border border-white/[0.06] relative group hover:border-purple-500/30 transition-all text-center">
                    <div className="text-6xl font-black text-white/[0.04] absolute top-3 right-4 select-none">{step.step}</div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-violet-600/10 border border-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Not sure which service <span className="gradient-text">you need?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Book a free consultation. We&apos;ll analyze your business and recommend
              the exact combination of services that will drive the most growth.
            </p>
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
