import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Users,
  TrendingUp,
  Globe,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Vahid Sediqi & Vezura10x | Digital Marketing Agency Germany",
  description:
    "Meet Vahid Sediqi, founder of Vezura10x. A full-stack digital marketing expert based in Germany with 8+ years of experience helping businesses 10X their revenue.",
  keywords: [
    "Vahid Sediqi",
    "digital marketing expert Germany",
    "Vezura10x founder",
    "SEO expert Germany",
    "Google Ads specialist Germany",
  ],
  alternates: { canonical: "https://vezura10x.com/about" },
  openGraph: {
    title: "About Vahid Sediqi & Vezura10x",
    description:
      "Meet the founder of Vezura10x — a full-stack digital marketing agency helping businesses 10X their revenue from Germany.",
  },
};

const values = [
  {
    icon: Target,
    title: "Results-First",
    desc: "Every strategy, every campaign, every decision is guided by one question: does this drive measurable ROI for our clients?",
  },
  {
    icon: Shield,
    title: "Transparency",
    desc: "No smoke and mirrors. We provide clear reporting, honest communication, and realistic projections — always.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Digital marketing evolves fast. We stay ahead of algorithm changes, platform updates, and emerging trends.",
  },
  {
    icon: Heart,
    title: "Partnership",
    desc: "We treat every client like a partner, not a transaction. Your success is our success — that's not a tagline, it's how we operate.",
  },
];

const milestones = [
  { year: "2016", event: "Started in digital marketing, mastering SEO & Google Ads" },
  { year: "2018", event: "First enterprise client — scaled their Google Ads ROAS from 2x to 9x" },
  { year: "2019", event: "Expanded into Shopify & Google Merchant Center optimization" },
  { year: "2020", event: "Helped 30+ businesses navigate and grow through the pandemic" },
  { year: "2021", event: "Founded Vezura10x to formalize the full-stack approach" },
  { year: "2022", event: "Reached 100+ clients milestone across Germany and Europe" },
  { year: "2023", event: "Crossed €8M in total ad spend managed for clients" },
  { year: "2024", event: "150+ clients grown, expanding team and service offerings" },
];

const certifications = [
  "Google Ads Search Certified",
  "Google Ads Shopping Certified",
  "Google Analytics 4 Certified",
  "Google Merchant Center Expert",
  "Shopify Partner Program",
  "Meta Ads Certified",
];

export default function AboutPage() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "500px", height: "500px", top: "10%", right: "-100px", opacity: 0.12, animationDuration: "10s" }} />
        <div className="orb orb-cyan" style={{ width: "400px", height: "400px", bottom: "20%", left: "-50px", opacity: 0.1, animationDelay: "4s" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* ── HERO ── */}
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge mb-4">About Vezura10x</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
              Built on one mission:{" "}
              <span className="gradient-text">your growth</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Vezura10x was founded with a simple but powerful belief — every business,
              regardless of size, deserves access to world-class digital marketing that
              actually delivers results.
            </p>
          </div>

          {/* Founder card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="glass-card rounded-2xl p-8 border border-white/[0.08] mb-6">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center text-white text-3xl font-black shadow-glow flex-shrink-0">
                    VS
                  </div>
                  <div>
                    <h2 className="text-white text-2xl font-bold">Vahid Sediqi</h2>
                    <p className="text-purple-400 text-sm font-medium">Founder & Lead Digital Strategist</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        Germany
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Globe className="w-3.5 h-3.5" />
                        8+ years experience
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Vahid is a self-made digital marketing expert who started from the ground up,
                  learning every aspect of the digital ecosystem — from technical SEO and
                  content strategy to advanced Google Ads campaigns and Shopify growth hacking.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  His German precision and systematic approach, combined with a deep understanding
                  of consumer psychology and search intent, has helped over 150 businesses achieve
                  transformative growth. Vahid personally oversees every client strategy,
                  ensuring the highest standards of execution and results.
                </p>
              </div>

              <a
                href="mailto:Vahid@vezura10x.com"
                className="btn-primary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Connect with Vahid
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, value: "10X", label: "Average client revenue growth", color: "text-purple-400" },
                { icon: Users, value: "150+", label: "Businesses successfully grown", color: "text-cyan-400" },
                { icon: Award, value: "€8M+", label: "Total ad spend managed", color: "text-orange-400" },
                { icon: Globe, value: "8+", label: "Years of hands-on experience", color: "text-green-400" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="glass-card rounded-2xl p-6 border border-white/[0.06] text-center hover:border-purple-500/30 transition-all">
                    <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-3`} />
                    <div className="stat-number text-4xl mb-1">{stat.value}</div>
                    <p className="text-slate-500 text-xs leading-tight">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="badge mb-4">Our Values</span>
              <h2 className="text-4xl font-black text-white mb-4">
                What drives us every day
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="glass-card rounded-2xl p-6 border border-white/[0.06] hover:border-purple-500/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="badge mb-4">Certifications & Expertise</span>
                <h2 className="text-4xl font-black text-white mb-5">
                  Certified expertise you can{" "}
                  <span className="gradient-text">trust</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Vahid holds multiple professional certifications across Google&apos;s suite of
                  marketing platforms. These aren&apos;t just badges — they reflect hundreds of
                  hours of hands-on learning and testing applied directly to client campaigns.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 border border-white/[0.06]">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="badge mb-4">Our Journey</span>
                <h2 className="text-4xl font-black text-white mb-6">
                  The Vezura10x{" "}
                  <span className="gradient-text">timeline</span>
                </h2>
                <div className="space-y-4">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/30 to-violet-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-400 text-xs font-bold">{m.year.slice(2)}</span>
                        </div>
                        {i < milestones.length - 1 && (
                          <div className="w-px flex-1 bg-gradient-to-b from-purple-500/30 to-transparent mt-2 min-h-4" />
                        )}
                      </div>
                      <div className="pb-4">
                        <span className="text-purple-400 text-xs font-bold">{m.year}</span>
                        <p className="text-slate-300 text-sm mt-0.5">{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Work directly with{" "}
              <span className="gradient-text">Vahid</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Every client at Vezura10x gets direct access to Vahid. Book a free 30-minute
              strategy call to discuss your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary px-7 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-2"
              >
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:Vahid@vezura10x.com"
                className="btn-secondary px-7 py-4 rounded-2xl font-bold inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Vahid@vezura10x.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

