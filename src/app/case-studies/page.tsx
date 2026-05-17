import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Search,
  ShoppingBag,
  Store,
  Star,
  BarChart3,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Case Studies & Results | Vezura10x Germany",
  description:
    "Real results from real clients. See how Vezura10x helped businesses 10X their revenue through SEO, Google Ads, and Shopify marketing in Germany.",
  keywords: [
    "digital marketing case studies Germany",
    "SEO results Germany",
    "Google Ads results Germany",
    "Shopify growth Germany",
    "digital marketing ROI Germany",
  ],
  alternates: { canonical: "https://vezura10x.com/case-studies" },
};

const caseStudies = [
  {
    id: 1,
    client: "TechRetail GmbH",
    industry: "Consumer Electronics",
    location: "Munich, Germany",
    service: "SEO + Google Ads",
    ServiceIcon: Search,
    serviceColor: "text-purple-400",
    tagColor: "bg-purple-500/15 text-purple-300 border-purple-500/20",
    challenge: "A mid-size electronics retailer stuck on page 3-4 for their core keywords, with Google Ads delivering a disappointing 2.5x ROAS despite a €20k/month budget.",
    solution: "Complete SEO overhaul: technical fixes, keyword restructure, and content hub creation. Google Ads account rebuilt from scratch with proper campaign structure and negative keywords.",
    results: [
      { metric: "+320%", label: "Organic traffic" },
      { metric: "8.5x", label: "Google Ads ROAS" },
      { metric: "45+", label: "Page 1 keywords" },
      { metric: "6 mo", label: "Timeframe" },
    ],
    testimonial: "Vahid transformed both our SEO and paid campaigns. The ROI has been exceptional — we're seeing returns we never thought possible.",
    name: "Markus Hoffmann",
    role: "CEO, TechRetail GmbH",
  },
  {
    id: 2,
    client: "Fashion Boutique Berlin",
    industry: "Fashion & Apparel",
    location: "Berlin, Germany",
    service: "Shopify + Google Merchant",
    ServiceIcon: ShoppingBag,
    serviceColor: "text-green-400",
    tagColor: "bg-green-500/15 text-green-300 border-green-500/20",
    challenge: "A Shopify fashion store generating only €5,000/month with no clear marketing strategy, poor product feed health, and zero SEO presence.",
    solution: "Full Shopify marketing system: Google Merchant Center setup with feed optimization, Shopping campaigns, Shopify SEO, and Facebook/Instagram ads — all working as a unified system.",
    results: [
      { metric: "10X", label: "Revenue growth" },
      { metric: "€52k", label: "Monthly revenue" },
      { metric: "+340%", label: "Shopping impressions" },
      { metric: "4 mo", label: "Timeframe" },
    ],
    testimonial: "We went from barely surviving to scaling fast. The Merchant Center setup alone changed our Google Shopping presence completely.",
    name: "Sarah Klein",
    role: "Owner, Fashion Boutique Berlin",
  },
  {
    id: 3,
    client: "SportEquip AG",
    industry: "Sports Equipment",
    location: "Hamburg, Germany",
    service: "SEO Optimization",
    ServiceIcon: Search,
    serviceColor: "text-purple-400",
    tagColor: "bg-purple-500/15 text-purple-300 border-purple-500/20",
    challenge: "A sporting goods company with a strong offline reputation but minimal online visibility. Competitors were dominating search results for their key product categories.",
    solution: "In-depth technical SEO audit, category page overhaul, topical content cluster strategy, and a systematic link building campaign targeting sports industry publications.",
    results: [
      { metric: "45+", label: "Page 1 rankings" },
      { metric: "+280%", label: "Organic revenue" },
      { metric: "2.8x", label: "Domain authority growth" },
      { metric: "8 mo", label: "Timeframe" },
    ],
    testimonial: "The SEO results have been remarkable. We're now ranking above national competitors for keywords we never thought we could win.",
    name: "Thomas Bauer",
    role: "Marketing Director, SportEquip AG",
  },
  {
    id: 4,
    client: "HomeDecor Plus GmbH",
    industry: "Home & Living",
    location: "Frankfurt, Germany",
    service: "Google Ads",
    ServiceIcon: TrendingUp,
    serviceColor: "text-cyan-400",
    tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
    challenge: "An e-commerce home decor brand spending €15k/month on Google Ads with a 1.8x ROAS — essentially breaking even on ad spend. Previous agency had failed to optimize.",
    solution: "Full account restructure: Performance Max campaigns with optimized asset groups, smart bidding strategies, audience signals, and conversion funnel improvements.",
    results: [
      { metric: "7.2x", label: "Google Ads ROAS" },
      { metric: "-35%", label: "Cost per acquisition" },
      { metric: "+190%", label: "Conversion rate" },
      { metric: "3 mo", label: "Timeframe" },
    ],
    testimonial: "Going from 1.8x to 7.2x ROAS while actually reducing our budget waste has been incredible. Vahid delivered exactly what he promised.",
    name: "Lisa Weber",
    role: "Founder, HomeDecor Plus GmbH",
  },
  {
    id: 5,
    client: "AutoParts Direct",
    industry: "Automotive",
    location: "Stuttgart, Germany",
    service: "SEO + Google Merchant",
    ServiceIcon: Store,
    serviceColor: "text-orange-400",
    tagColor: "bg-orange-500/15 text-orange-300 border-orange-500/20",
    challenge: "An automotive parts retailer with 50,000+ SKUs in Merchant Center, plagued by feed errors, disapprovals, and minimal Shopping visibility.",
    solution: "Systematic Merchant Center cleanup: resolved 8,000+ feed errors, optimized product titles and attributes, rebuilt Shopping campaign structure with smart bidding.",
    results: [
      { metric: "8,200+", label: "Feed errors resolved" },
      { metric: "+420%", label: "Shopping impressions" },
      { metric: "5.5x", label: "Shopping ROAS" },
      { metric: "6 wk", label: "Setup timeframe" },
    ],
    testimonial: "The feed cleanup alone was worth the investment. Vahid's team resolved years of accumulated issues in weeks and our Shopping revenue exploded.",
    name: "Klaus Richter",
    role: "CEO, AutoParts Direct",
  },
  {
    id: 6,
    client: "Organic Wellness GmbH",
    industry: "Health & Wellness",
    location: "Cologne, Germany",
    service: "Full-Stack Digital Marketing",
    ServiceIcon: Target,
    serviceColor: "text-pink-400",
    tagColor: "bg-pink-500/15 text-pink-300 border-pink-500/20",
    challenge: "A new health and wellness brand launching with no digital presence, limited budget, and operating in a highly competitive market dominated by established players.",
    solution: "Full digital launch strategy: technical SEO foundation, targeted Google Ads from day one, Shopify optimization, and Google Shopping setup — all coordinated for maximum impact.",
    results: [
      { metric: "€180k", label: "Revenue in year 1" },
      { metric: "4.8x", label: "Overall ROAS" },
      { metric: "Top 5", label: "Rankings for 30+ keywords" },
      { metric: "12 mo", label: "Full year results" },
    ],
    testimonial: "We went from zero to €180k revenue in 12 months. Having Vahid coordinate all channels as one integrated strategy was the key to our fast growth.",
    name: "Anna Müller",
    role: "Co-founder, Organic Wellness GmbH",
  },
];

const aggregateStats = [
  { value: "150+", label: "Clients grown", icon: BarChart3 },
  { value: "10X", label: "Average revenue growth", icon: TrendingUp },
  { value: "€8M+", label: "Ad spend managed", icon: Target },
  { value: "97%", label: "Client retention", icon: Star },
];

export default function CaseStudiesPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "500px", height: "500px", top: "5%", left: "-100px", animationDuration: "10s" }} />
        <div className="orb orb-cyan" style={{ width: "400px", height: "400px", bottom: "20%", right: "-80px", animationDelay: "4s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* Hero */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-4">Case Studies</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
            Real businesses,{" "}
            <span className="gradient-text">extraordinary results</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
            Every case study below represents a real client — with real challenges,
            real strategies, and real measurable outcomes. No inflated numbers, just results.
          </p>

          {/* Aggregate stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {aggregateStats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="glass-card rounded-2xl p-5 border border-white/[0.06]">
                  <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Case studies */}
        <section className="section-pad max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs) => {
              const ServiceIcon = cs.ServiceIcon;
              return (
                <div key={cs.id} className="glass-card rounded-2xl border border-white/[0.06] hover:border-purple-500/25 transition-all overflow-hidden">
                  {/* Header */}
                  <div className="p-6 md:p-8 border-b border-white/[0.05]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-violet-600/10 border border-purple-500/20 flex items-center justify-center">
                          <span className="text-white font-black text-lg">{cs.client.charAt(0)}</span>
                        </div>
                        <div>
                          <h2 className="text-white text-xl font-bold">{cs.client}</h2>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-slate-500 text-xs">{cs.industry}</span>
                            <span className="text-slate-600">·</span>
                            <span className="text-slate-500 text-xs">{cs.location}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-full border ${cs.tagColor}`}>
                        {cs.service}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2 p-6 md:p-8 space-y-5">
                      <div>
                        <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">The Challenge</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Our Solution</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      {/* Testimonial */}
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="flex mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-slate-300 text-sm italic mb-2">&ldquo;{cs.testimonial}&rdquo;</p>
                        <p className="text-slate-400 text-xs font-medium">{cs.name} · <span className="text-slate-500">{cs.role}</span></p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="border-t lg:border-t-0 lg:border-l border-white/[0.05] p-6 md:p-8 bg-white/[0.01]">
                      <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Results</h3>
                      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                        {cs.results.map((r) => (
                          <div key={r.label} className="glass-card rounded-xl p-3 border border-white/[0.06] text-center">
                            <div className="text-2xl font-black text-white">{r.metric}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Want to be our next{" "}
              <span className="gradient-text">success story?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Book a free strategy call. We&apos;ll show you exactly how we can replicate
              these results for your business.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2">
              Start Your Growth Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
