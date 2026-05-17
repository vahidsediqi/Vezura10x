import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag, Search, TrendingUp, ShoppingBag, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | SEO, Google Ads & Shopify Tips – Vezura10x",
  description:
    "Expert digital marketing insights from Vahid Sediqi. Actionable tips on SEO, Google Ads, Google Merchant Center, and Shopify growth strategies for German businesses.",
  keywords: [
    "digital marketing blog Germany",
    "SEO tips Germany",
    "Google Ads tips Germany",
    "Shopify marketing blog",
    "digital marketing insights Germany",
  ],
  alternates: { canonical: "https://vezura10x.com/blog" },
};

const posts = [
  {
    slug: "seo-strategy-germany-2024",
    category: "SEO",
    CategoryIcon: Search,
    categoryColor: "text-purple-400 bg-purple-500/15 border-purple-500/20",
    title: "The Complete SEO Strategy for German Businesses in 2024",
    excerpt:
      "A comprehensive guide to ranking on Google.de — covering technical SEO, German-language content strategy, local SEO, and link building in the DACH market.",
    readTime: "12 min read",
    date: "November 15, 2024",
    keywords: ["Technical SEO", "German SEO", "DACH Market"],
    featured: true,
  },
  {
    slug: "google-ads-roas-optimization",
    category: "Google Ads",
    CategoryIcon: TrendingUp,
    categoryColor: "text-cyan-400 bg-cyan-500/15 border-cyan-500/20",
    title: "How We Took a Client from 2.5x to 8.5x ROAS in 90 Days",
    excerpt:
      "A detailed case study and actionable playbook for dramatically improving Google Ads ROAS through account structure, bidding strategy, and conversion optimization.",
    readTime: "10 min read",
    date: "November 8, 2024",
    keywords: ["ROAS", "PPC Optimization", "Google Ads"],
    featured: false,
  },
  {
    slug: "shopify-seo-complete-guide",
    category: "Shopify",
    CategoryIcon: ShoppingBag,
    categoryColor: "text-green-400 bg-green-500/15 border-green-500/20",
    title: "Shopify SEO: The Complete Technical Guide for 2024",
    excerpt:
      "Shopify has specific SEO challenges that most generic guides miss. This article covers every Shopify-specific technical SEO issue and how to fix them for maximum organic growth.",
    readTime: "15 min read",
    date: "October 28, 2024",
    keywords: ["Shopify SEO", "E-commerce SEO", "Technical SEO"],
    featured: false,
  },
  {
    slug: "google-merchant-center-guide",
    category: "Google Merchant",
    CategoryIcon: Store,
    categoryColor: "text-orange-400 bg-orange-500/15 border-orange-500/20",
    title: "Google Merchant Center: The Ultimate Setup Guide for E-commerce",
    excerpt:
      "Everything you need to know about setting up and optimizing Google Merchant Center — from account creation and product feed best practices to Shopping campaign structure.",
    readTime: "14 min read",
    date: "October 15, 2024",
    keywords: ["Merchant Center", "Product Feeds", "Shopping Ads"],
    featured: false,
  },
  {
    slug: "core-web-vitals-ranking-factor",
    category: "SEO",
    CategoryIcon: Search,
    categoryColor: "text-purple-400 bg-purple-500/15 border-purple-500/20",
    title: "Core Web Vitals: Why Page Speed is Now a Critical Ranking Factor",
    excerpt:
      "Google's Core Web Vitals are now a confirmed ranking factor. Learn exactly what LCP, FID, and CLS mean, how they affect your rankings, and how to optimize them.",
    readTime: "9 min read",
    date: "October 3, 2024",
    keywords: ["Core Web Vitals", "Page Speed", "Technical SEO"],
    featured: false,
  },
  {
    slug: "performance-max-campaigns-guide",
    category: "Google Ads",
    CategoryIcon: TrendingUp,
    categoryColor: "text-cyan-400 bg-cyan-500/15 border-cyan-500/20",
    title: "Performance Max Campaigns: How to Actually Make Them Work",
    excerpt:
      "Performance Max is powerful but often misunderstood. This guide shares our proven approach to setting up and optimizing PMax campaigns for consistently high ROAS.",
    readTime: "11 min read",
    date: "September 20, 2024",
    keywords: ["Performance Max", "PMax", "Google Ads"],
    featured: false,
  },
  {
    slug: "shopify-conversion-rate-optimization",
    category: "Shopify",
    CategoryIcon: ShoppingBag,
    categoryColor: "text-green-400 bg-green-500/15 border-green-500/20",
    title: "15 Shopify CRO Tactics That Doubled Our Clients' Conversion Rates",
    excerpt:
      "Most Shopify stores convert at under 2%. Here are 15 concrete, tested tactics we use to push conversion rates to 4-6%+ — from product page copy to checkout optimization.",
    readTime: "13 min read",
    date: "September 10, 2024",
    keywords: ["CRO", "Shopify Optimization", "Conversion Rate"],
    featured: false,
  },
  {
    slug: "local-seo-germany",
    category: "SEO",
    CategoryIcon: Search,
    categoryColor: "text-purple-400 bg-purple-500/15 border-purple-500/20",
    title: "Local SEO for German Businesses: Rank in Your City",
    excerpt:
      "A step-by-step local SEO guide for German businesses — Google Business Profile optimization, local citations, NAP consistency, and ranking for 'near me' searches in Germany.",
    readTime: "10 min read",
    date: "August 25, 2024",
    keywords: ["Local SEO", "Germany SEO", "Google Business Profile"],
    featured: false,
  },
];

const categories = ["All", "SEO", "Google Ads", "Shopify", "Google Merchant"];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "500px", height: "500px", top: "5%", right: "-100px", animationDuration: "11s" }} />
        <div className="orb orb-cyan" style={{ width: "400px", height: "400px", bottom: "30%", left: "-80px", animationDelay: "5s", opacity: 0.08 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* Hero */}
        <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-4">Digital Marketing Blog</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">
            Insights to help you{" "}
            <span className="gradient-text">grow faster</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Actionable strategies, case studies, and expert insights on SEO, Google Ads,
            Google Merchant Center, and Shopify — written by practitioners, not theorists.
          </p>
        </section>

        {/* Category filter */}
        <section className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  cat === "All"
                    ? "bg-purple-600 text-white"
                    : "glass-card border border-white/[0.08] text-slate-400 hover:text-white hover:border-purple-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured post */}
        <section className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="glass-card glass-card-hover rounded-2xl border border-white/[0.06] hover:border-purple-500/30 overflow-hidden block group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Visual */}
              <div className="bg-gradient-to-br from-purple-900/40 via-violet-900/20 to-cyan-900/20 p-10 flex items-center justify-center min-h-56 lg:min-h-auto relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border mb-4 ${featured.categoryColor}`}>
                    <featured.CategoryIcon className="w-3.5 h-3.5" />
                    {featured.category}
                  </div>
                  <div className="text-7xl font-black text-white/[0.08] select-none leading-none">SEO<br/>2024</div>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">Featured Article</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-500 text-xs">{featured.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featured.keywords.map((kw) => (
                    <span key={kw} className="tag-pill">{kw}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </div>
                  <span className="flex items-center gap-1.5 text-purple-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* All posts grid */}
        <section className="section-pad max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card glass-card-hover rounded-2xl border border-white/[0.06] hover:border-purple-500/30 overflow-hidden flex flex-col group"
              >
                {/* Color bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${
                  post.category === "SEO" ? "from-purple-600 to-violet-600" :
                  post.category === "Google Ads" ? "from-cyan-600 to-blue-600" :
                  post.category === "Shopify" ? "from-green-600 to-emerald-600" :
                  "from-orange-500 to-amber-600"
                }`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${post.categoryColor}`}>
                      <post.CategoryIcon className="w-3 h-3" />
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-purple-300 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.keywords.map((kw) => (
                      <span key={kw} className="text-xs px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-slate-500">
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.05]">
                    <span className="text-slate-500 text-xs">{post.date}</span>
                    <span className="flex items-center gap-1 text-purple-400 text-xs font-medium">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Stay ahead of the curve
            </h2>
            <p className="text-slate-400 mb-6">
              Get expert digital marketing insights delivered to your inbox. No spam,
              just actionable strategies from Vahid Sediqi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.07] transition-all"
              />
              <button className="btn-primary px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
