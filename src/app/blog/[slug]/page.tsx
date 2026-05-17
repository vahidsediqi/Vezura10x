import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { client } from "@/sanity/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(postSlugsQuery).catch(() => []);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug }).catch(() => null);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Vezura10x Blog`,
    description: post.seoDescription || post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage
        ? [{ url: urlFor(post.coverImage).width(1200).height(630).url() }]
        : [],
    },
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: object; alt?: string; caption?: string } }) => (
      <figure className="my-8">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image
            src={urlFor(value).width(900).url()}
            alt={value.alt || ""}
            fill
            className="object-cover"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-slate-500 text-sm mt-2 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-bold text-white mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-slate-300 leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-purple-500 pl-5 my-6 italic text-slate-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-5 text-slate-300 pl-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-5 text-slate-300 pl-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic text-slate-200">{children}</em>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug }).catch(() => null);
  if (!post) notFound();

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "500px", height: "500px", top: "0", left: "-100px", animationDuration: "10s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              {post.category && (
                <span className="badge">{post.category.title}</span>
              )}
              {post.readTime && (
                <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              )}
              {post.publishedAt && (
                <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString("en-DE", {
                    day: "numeric", month: "long", year: "numeric",
                  })}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">{post.excerpt}</p>
          </header>

          {/* Cover image */}
          {post.coverImage && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12">
              <Image
                src={urlFor(post.coverImage).width(900).height(500).url()}
                alt={post.coverImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Body */}
          <div className="prose-custom">
            {post.body ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p className="text-slate-400 italic">No content yet.</p>
            )}
          </div>

          {/* Keywords */}
          {post.keywords?.length > 0 && (
            <div className="mt-10 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-slate-500" />
                {post.keywords.map((kw: string) => (
                  <span key={kw} className="tag-pill">{kw}</span>
                ))}
              </div>
            </div>
          )}

          {/* Author */}
          <div className="mt-10 pt-6 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center text-white font-bold text-lg">
                VS
              </div>
              <div>
                <p className="text-white font-semibold">{post.author?.name ?? "Vahid Sediqi"}</p>
                <p className="text-slate-500 text-sm">Founder, Vezura10x · Germany</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-600/10 to-violet-600/5 border border-purple-500/20 p-8 text-center">
            <h3 className="text-white text-xl font-bold mb-2">
              Want these results for your business?
            </h3>
            <p className="text-slate-400 text-sm mb-5">
              Book a free strategy audit with Vahid and discover your growth potential.
            </p>
            <Link
              href="/contact"
              className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2"
            >
              Get Free Audit
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
