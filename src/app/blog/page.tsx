import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { client } from "@/sanity/client";
import { postsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | SEO, Google Ads & Shopify Tips – Vezura10x",
  description:
    "Expert digital marketing insights from Vahid Sediqi. Actionable tips on SEO, Google Ads, Google Merchant Center, and Shopify growth strategies for German businesses.",
  alternates: { canonical: "https://vezura10x.com/blog" },
};

export const revalidate = 60;

const categoryColors: Record<string, string> = {
  purple: "text-purple-400 bg-purple-500/15 border-purple-500/20",
  cyan: "text-cyan-400 bg-cyan-500/15 border-cyan-500/20",
  orange: "text-orange-400 bg-orange-500/15 border-orange-500/20",
  green: "text-green-400 bg-green-500/15 border-green-500/20",
  pink: "text-pink-400 bg-pink-500/15 border-pink-500/20",
};

const categoryBar: Record<string, string> = {
  purple: "from-purple-600 to-violet-600",
  cyan: "from-cyan-600 to-blue-600",
  orange: "from-orange-500 to-amber-600",
  green: "from-green-600 to-emerald-600",
  pink: "from-pink-500 to-rose-600",
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  readTime?: string;
  coverImage?: { asset: object; alt?: string };
  category?: { title: string; color: string };
};

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery).catch(() => []);
  const featured = posts[0];
  const rest = posts.slice(1);

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
            Actionable strategies and expert insights on SEO, Google Ads, Google Merchant
            Center, and Shopify — written by practitioners, not theorists.
          </p>
        </section>

        {posts.length === 0 ? (
          /* Empty state */
          <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center">
            <div className="glass-card rounded-2xl p-12 border border-white/[0.08]">
              <div className="text-5xl mb-4">✍️</div>
              <h2 className="text-white text-2xl font-bold mb-3">No posts yet</h2>
              <p className="text-slate-400 mb-6">
                Head to the{" "}
                <Link href="/studio" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  Studio dashboard
                </Link>{" "}
                to write your first blog post.
              </p>
            </div>
          </section>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <section className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                  href={`/blog/${featured.slug.current}`}
                  className="glass-card glass-card-hover rounded-2xl border border-white/[0.06] hover:border-purple-500/30 overflow-hidden block group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Cover image or gradient */}
                    <div className="relative min-h-56 lg:min-h-auto overflow-hidden bg-gradient-to-br from-purple-900/40 via-violet-900/20 to-cyan-900/20">
                      {featured.coverImage ? (
                        <Image
                          src={urlFor(featured.coverImage).width(800).height(500).url()}
                          alt={featured.coverImage.alt || featured.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 grid-bg opacity-30 flex items-center justify-center">
                          <span className="text-6xl font-black text-white/[0.06] select-none">
                            {featured.title.slice(0, 3).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider">
                          Featured Article
                        </span>
                        {featured.category && (
                          <>
                            <span className="text-slate-600">·</span>
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[featured.category.color] ?? categoryColors.purple}`}>
                              {featured.category.title}
                            </span>
                          </>
                        )}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-slate-400 leading-relaxed mb-5 line-clamp-3">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-slate-500 text-xs">
                          {featured.readTime && (
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5" />
                              {featured.readTime}
                            </span>
                          )}
                          {featured.publishedAt && (
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(featured.publishedAt).toLocaleDateString("en-DE", {
                                day: "numeric", month: "long", year: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                        <span className="flex items-center gap-1.5 text-purple-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
            )}

            {/* Post grid */}
            {rest.length > 0 && (
              <section className="section-pad max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => {
                    const colorKey = post.category?.color ?? "purple";
                    return (
                      <Link
                        key={post._id}
                        href={`/blog/${post.slug.current}`}
                        className="glass-card glass-card-hover rounded-2xl border border-white/[0.06] hover:border-purple-500/30 overflow-hidden flex flex-col group"
                      >
                        {/* Cover image */}
                        {post.coverImage ? (
                          <div className="relative h-44 overflow-hidden">
                            <Image
                              src={urlFor(post.coverImage).width(600).height(350).url()}
                              alt={post.coverImage.alt || post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className={`h-1 w-full bg-gradient-to-r ${categoryBar[colorKey]}`} />
                        )}

                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-3">
                            {post.category && (
                              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[colorKey]}`}>
                                {post.category.title}
                              </span>
                            )}
                            {post.readTime && (
                              <span className="flex items-center gap-1 text-slate-500 text-xs">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            )}
                          </div>

                          <h3 className="text-white font-bold text-lg mb-2 leading-tight group-hover:text-purple-300 transition-colors flex-1">
                            {post.title}
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.05]">
                            <span className="text-slate-500 text-xs">
                              {post.publishedAt
                                ? new Date(post.publishedAt).toLocaleDateString("en-DE", {
                                    day: "numeric", month: "short", year: "numeric",
                                  })
                                : "Draft"}
                            </span>
                            <span className="flex items-center gap-1 text-purple-400 text-xs font-medium">
                              Read <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}
