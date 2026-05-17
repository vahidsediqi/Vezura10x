import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Search,
  TrendingUp,
  ShoppingBag,
  Store,
  MessageSquare,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Vezura10x | Get Your Free Digital Marketing Audit",
  description:
    "Contact Vahid Sediqi at Vezura10x for a free digital marketing audit. SEO, Google Ads, Google Merchant Center, and Shopify growth strategies for your business.",
  keywords: [
    "contact digital marketing agency Germany",
    "free SEO audit Germany",
    "digital marketing consultation Germany",
    "Vahid Sediqi contact",
    "Vezura10x contact",
  ],
  alternates: { canonical: "https://vezura10x.com/contact" },
};

const services = [
  { icon: Search, label: "SEO Optimization" },
  { icon: TrendingUp, label: "Google Ads" },
  { icon: Store, label: "Google Merchant Center" },
  { icon: ShoppingBag, label: "Shopify Marketing" },
  { icon: MessageSquare, label: "General Inquiry" },
];

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "We respond to all inquiries within 24 hours on business days. For urgent matters, email directly to Vahid@vezura10x.com.",
  },
  {
    q: "Is the audit really free?",
    a: "Yes, 100% free with no obligation. We provide a genuine, detailed audit of your digital marketing presence and opportunities.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely. We work with businesses of all sizes — from local startups to established enterprises. Our strategies scale to your budget and goals.",
  },
  {
    q: "How long are your contracts?",
    a: "We offer month-to-month agreements. We believe in earning your business every month through results, not locking you into long contracts.",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="orb orb-purple" style={{ width: "600px", height: "600px", top: "-100px", left: "-150px", animationDuration: "10s" }} />
        <div className="orb orb-cyan" style={{ width: "400px", height: "400px", bottom: "20%", right: "-80px", animationDelay: "4s", opacity: 0.1 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/40 to-[#050510]" />
      </div>

      <div className="relative z-10 pt-28">
        {/* Hero */}
        <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-4">Get In Touch</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">
            Let&apos;s grow your business{" "}
            <span className="gradient-text">together</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Book a free strategy call with Vahid. We&apos;ll analyze your business, identify
            your biggest growth opportunities, and show you exactly how to capture them.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-8 border border-white/[0.08]">
                <h2 className="text-white text-2xl font-bold mb-2">Get Your Free Audit</h2>
                <p className="text-slate-400 text-sm mb-8">
                  Fill in the form below and Vahid will personally review your inquiry and
                  respond within 24 hours.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Max"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Mustermann"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      placeholder="max@yourcompany.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Company / Website
                    </label>
                    <input
                      type="text"
                      placeholder="yourcompany.de"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Service of Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <label
                            key={service.label}
                            className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] cursor-pointer hover:border-purple-500/30 hover:bg-white/[0.06] transition-all group"
                          >
                            <input type="checkbox" className="sr-only" />
                            <Icon className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                            <span className="text-slate-400 text-xs group-hover:text-white transition-colors">
                              {service.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Monthly Marketing Budget
                    </label>
                    <select className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-purple-500/50 transition-all appearance-none">
                      <option value="" className="bg-[#0a0a1a]">Select budget range</option>
                      <option value="under-1k" className="bg-[#0a0a1a]">Under €1,000/month</option>
                      <option value="1k-5k" className="bg-[#0a0a1a]">€1,000 – €5,000/month</option>
                      <option value="5k-15k" className="bg-[#0a0a1a]">€5,000 – €15,000/month</option>
                      <option value="15k-50k" className="bg-[#0a0a1a]">€15,000 – €50,000/month</option>
                      <option value="50k+" className="bg-[#0a0a1a]">€50,000+/month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                      Tell us about your goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your business, current challenges, and what you want to achieve. The more context you provide, the more tailored our audit will be."
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2"
                  >
                    Send Message & Get Free Audit
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    By submitting, you agree to our Privacy Policy. We respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                <h3 className="text-white font-bold text-lg mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:Vahid@vezura10x.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/30 transition-all">
                      <Mail className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs mb-0.5">Email</p>
                      <p className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">
                        Vahid@vezura10x.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs mb-0.5">Location</p>
                      <p className="text-white text-sm font-medium">Germany 🇩🇪</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs mb-0.5">Response Time</p>
                      <p className="text-white text-sm font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's included */}
              <div className="glass-card rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-violet-600/5">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-bold">Free Audit Includes:</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Current SEO performance analysis",
                    "Google Ads account review (if applicable)",
                    "Competitor landscape overview",
                    "Top 3 growth opportunities",
                    "Custom strategy recommendations",
                    "Realistic timeline & projections",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability */}
              <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-semibold">Currently Accepting Clients</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We have limited availability to ensure every client receives the full
                  attention and quality they deserve. Book now to secure your spot.
                </p>
              </div>

              {/* Social proof */}
              <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
                <p className="text-slate-400 text-sm italic mb-4">
                  &ldquo;Vahid responded within 2 hours and provided a detailed audit even before
                  we signed up. The level of professionalism was immediately clear.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center text-white text-xs font-bold">A</div>
                  <div>
                    <p className="text-white text-xs font-semibold">Anna Müller</p>
                    <p className="text-slate-500 text-xs">Organic Wellness GmbH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white mb-3">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass-card rounded-xl p-6 border border-white/[0.06]">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
