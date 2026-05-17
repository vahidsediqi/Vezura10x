import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  FileText,
  Link2,
  Code,
  Star,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Optimization Services Germany | Rank Higher on Google – Vezura10x",
  description:
    "Professional SEO services in Germany. Technical SEO, content strategy, and link building that drives organic traffic and revenue. Led by Vahid Sediqi.",
  keywords: [
    "SEO agency Germany",
    "SEO optimization Germany",
    "technical SEO Germany",
    "SEO services Berlin",
    "organic search optimization Germany",
    "Google ranking Germany",
    "SEO expert Vahid Sediqi",
  ],
  alternates: { canonical: "https://vezura10x.com/services/seo" },
  openGraph: {
    title: "SEO Optimization Services Germany | Vezura10x",
    description:
      "Dominate Google search rankings in Germany with our technical SEO, content strategy, and link building services.",
  },
};

const seoServices = [
  {
    icon: Code,
    title: "Technical SEO",
    desc: "We fix the technical foundations that prevent your site from ranking: crawlability, indexability, Core Web Vitals, structured data, and site architecture.",
    items: ["Site audit & error resolution", "Core Web Vitals optimization", "Schema markup implementation", "XML sitemaps & robots.txt", "Page speed optimization", "Mobile-first indexing"],
  },
  {
    icon: Target,
    title: "Keyword Research & Strategy",
    desc: "We identify the exact keywords your ideal customers use — high-intent, commercial terms that drive qualified traffic and revenue, not just vanity metrics.",
    items: ["Competitor keyword gap analysis", "Search intent mapping", "Long-tail opportunity identification", "Keyword clustering", "German & EU market focus", "Monthly keyword tracking"],
  },
  {
    icon: FileText,
    title: "Content Strategy & Creation",
    desc: "Content that ranks and converts. We create SEO-optimized content that answers search intent, demonstrates expertise, and builds topical authority.",
    items: ["Content audit & optimization", "Blog & article creation", "Product/service page optimization", "Topical authority clusters", "E-E-A-T optimization", "Multilingual SEO (DE/EN)"],
  },
  {
    icon: Link2,
    title: "Link Building",
    desc: "Quality backlinks from relevant, authoritative sites are still the #1 ranking factor. Our white-hat link building campaigns build domain authority sustainably.",
    items: ["Guest posting campaigns", "Digital PR & outreach", "Competitor backlink analysis", "Broken link building", "HARO & media mentions", "Local citations (Germany)"],
  },
];

const results = [
  { metric: "+320%", label: "Average organic traffic increase" },
  { metric: "3-6", label: "Months to first major results" },
  { metric: "45+", label: "Page 1 keywords for one client" },
  { metric: "97%", label: "Client retention after 12 months" },
];

const faq = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term investment. Most clients see meaningful improvements within 3-6 months, with significant results by month 9-12. Technical fixes can show faster results, while competitive keywords take longer.",
  },
  {
    q: "Do you work with businesses outside Germany?",
    a: "Yes! While we specialize in the German and DACH market, we work with businesses across Europe and beyond. Our strategies are adapted to each target market and language.",
  },
  {
    q: "What makes your SEO approach different?",
    a: "We focus exclusively on SEO tactics that drive revenue, not just traffic. Every keyword we target, every piece of content we create is mapped to a commercial intent and business goal.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No reputable SEO agency can guarantee specific rankings — Google's algorithm is complex and always evolving. We do guarantee our process, transparency, and a focus on measurable growth.",
  },
];

export default function SEOPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "600px", height: "600px", top: "0", left: "-150px", animationDuration: "9s" }} />
        <div className="orb orb-cyan" style={{ width: "400px", height: "400px", top: "50%", right: "-80px", animationDelay: "3s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/50 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* Hero */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="badge">SEO Services</span>
                <span className="tag-pill">Most Popular</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
                Rank #1 on Google.{" "}
                <span className="gradient-text">Own your market.</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Vezura10x delivers enterprise-grade SEO for businesses of all sizes in Germany
                and beyond. We combine deep technical expertise, data-driven content strategy,
                and authoritative link building to deliver rankings that last — and revenue that grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                  Get Free SEO Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies" className="btn-secondary px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
                  View SEO Results <TrendingUp className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {["Technical SEO", "Content Strategy", "Link Building", "Local SEO"].map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <Search className="w-5 h-5 text-purple-400" />
                <span className="text-white font-semibold">SEO Performance Dashboard</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {results.map((r) => (
                  <div key={r.label} className="glass-card rounded-xl p-4 border border-white/[0.06] text-center">
                    <div className="text-3xl font-black text-white mb-1">{r.metric}</div>
                    <div className="text-xs text-slate-500 leading-tight">{r.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-purple-600/10 to-violet-600/5 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">Latest client result</span>
                </div>
                <p className="text-white text-sm font-medium">+320% organic traffic in 8 months</p>
                <p className="text-slate-400 text-xs">E-commerce brand, Germany</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services breakdown */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="badge mb-4">What We Do</span>
              <h2 className="text-4xl font-black text-white mb-4">
                Comprehensive SEO that{" "}
                <span className="gradient-text">actually works</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Our SEO service is a complete system — not a collection of disconnected tactics.
                Every element works together to build sustainable search dominance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoServices.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="glass-card rounded-2xl p-7 border border-white/[0.06] hover:border-purple-500/30 transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="service-icon bg-purple-600/20 border-purple-500/30">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{s.title}</h3>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                      {s.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-slate-400 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
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

        {/* Testimonial */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="testimonial-card text-center">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-white text-xl font-medium leading-relaxed mb-6">
                &ldquo;Vezura10x took our website from page 4 to page 1 for our most competitive keywords in under 6 months. The organic traffic increase has been transformative for our business.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center text-white font-bold">T</div>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">Thomas Bauer</p>
                  <p className="text-slate-500 text-xs">Marketing Director, SportEquip AG</p>
                </div>
                <span className="ml-4 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">45+ page 1 keywords</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white mb-3">Frequently Asked Questions</h2>
              <p className="text-slate-400">Everything you need to know about our SEO service.</p>
            </div>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="glass-card rounded-xl p-6 border border-white/[0.06]">
                  <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Ready to <span className="gradient-text">rank higher</span> and grow faster?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Get a free SEO audit. We&apos;ll analyze your website and competitors, then show
              you exactly what it will take to reach page 1.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2">
              Get My Free SEO Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
