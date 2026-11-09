"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { ArrowRight, Check, Minus, Plus, Terminal } from "lucide-react";
import clsx from "clsx";
import { Reveal, SectionHeading, SoonBadge } from "./ui";
import { Logo } from "./Logo";
import { devFeatures, faqs, navLinks, roadmap } from "@/lib/content";

/* ---------- Developers ---------- */
const code = `const paysecure = require("paysecure")("sk_test_...");

const intent = await paysecure.paymentIntents.create({
  amount: 450000,           // Rs 4,500.00 in paisa
  currency: "pkr",
  payment_method_types: ["card", "raast", "jazzcash", "easypaisa"],
  description: "Order #1042",
});`;

function TypedCode() {
  const ref = useRef<HTMLPreElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(code.length);
      return;
    }
    const t = setInterval(() => setN((x) => (x >= code.length ? (clearInterval(t), x) : x + 3)), 16);
    return () => clearInterval(t);
  }, [inView]);
  const shown = code.slice(0, n);
  return (
    <pre ref={ref} className="min-h-[260px] overflow-x-auto p-5 font-mono text-[13px] leading-6 text-white/85">
      <code>{highlight(shown)}</code>
      <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-lime" />
    </pre>
  );
}

function highlight(src: string) {
  // Tiny highlighter: strings, comments, numbers, keywords.
  const parts = src.split(/("[^"\n]*"?|\/\/[^\n]*|\b\d+\b|\b(?:const|await|require)\b)/g);
  return parts.map((p, i) => {
    if (!p) return null;
    if (p.startsWith("//")) return <span key={i} className="text-mist/70">{p}</span>;
    if (p.startsWith('"')) return <span key={i} className="text-lime">{p}</span>;
    if (/^\d+$/.test(p)) return <span key={i} className="text-sky">{p}</span>;
    if (/^(const|await|require)$/.test(p)) return <span key={i} className="text-violet">{p}</span>;
    return <span key={i}>{p}</span>;
  });
}

export function Developers() {
  return (
    <section id="developers" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="min-w-0">
          <SectionHeading
            center={false}
            eyebrow="Developers"
            title={
              <>
                An API that feels <span className="text-gradient">instantly familiar.</span>
              </>
            }
            body="Clean, predictable objects, clear errors and great docs, with Pakistan's payment methods built in from day one."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {devFeatures.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <li className="flex items-start gap-2.5 text-sm text-white/85">
                  <Check size={16} className="mt-0.5 shrink-0 text-mint" /> {f}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="min-w-0">
          <div className="relative">
            <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-lime/20 via-transparent to-violet/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-ink-2 shadow-2xl">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/70" />
                  <span className="h-3 w-3 rounded-full bg-mint/70" />
                </div>
                <span className="flex items-center gap-1.5 text-xs text-mist">
                  <Terminal size={13} /> create-payment.js
                </span>
                <SoonBadge />
              </div>
              <TypedCode />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Roadmap ---------- */
export function Roadmap() {
  return (
    <section id="roadmap" className="relative scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Roadmap"
          title={
            <>
              What&apos;s <span className="text-gradient">coming soon.</span>
            </>
          }
          body="We're rolling PaySecure out in phases. Here's what's planned, from launch onwards."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((r, i) => (
            <Reveal key={r.phase} delay={i * 0.1}>
              <div
                className={clsx(
                  "relative h-full rounded-3xl border p-6",
                  i === 0 ? "border-lime/40 bg-gradient-to-b from-lime/10 to-transparent" : "border-line bg-white/[0.02]",
                )}
              >
                {i === 0 && (
                  <span className="absolute -top-3 left-6 rounded-full bg-lime px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-ink">
                    First up
                  </span>
                )}
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-mist">{r.phase}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-white">{r.name}</p>
                <ul className="mt-5 space-y-2.5">
                  {r.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className={clsx("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", i === 0 ? "bg-lime" : "bg-white/30")} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-28 px-5 py-24">
      <SectionHeading eyebrow="FAQ" title="Questions, answered." />
      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className={clsx("rounded-2xl border transition-colors", isOpen ? "border-white/15 bg-white/[0.04]" : "border-line bg-white/[0.015]")}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-white">{f.q}</span>
                  <span className={clsx("flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors", isOpen ? "bg-lime text-ink" : "bg-white/5 text-white")}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 leading-relaxed text-mist">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- Waitlist CTA ---------- */
const WAITLIST_EMAIL = process.env.NEXT_PUBLIC_WAITLIST_EMAIL || "hello@paysecure.pk";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    // No backend yet: hand off to the visitor's mail app.
    const subject = encodeURIComponent("PaySecure early access");
    const body = encodeURIComponent(`Please add ${email} to the PaySecure waitlist.`);
    window.location.href = `mailto:${WAITLIST_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="waitlist" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[40px] border border-lime/30 bg-ink-2 px-6 py-16 text-center md:px-16 md:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute left-1/2 top-0 h-[360px] w-[620px] -translate-x-1/2 animate-aurora rounded-full bg-lime/25 blur-[120px]" />
          </div>
          <div className="relative">
            <SoonBadge />
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Be first to get paid <span className="text-gradient">with PaySecure.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-mist">
              Join the waitlist for early access, launch pricing and a direct line to the team building it.
            </p>
            <form onSubmit={submit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="wl-email" className="sr-only">
                Work email
              </label>
              <input
                id="wl-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@business.pk"
                className="h-12 flex-1 rounded-full border border-white/15 bg-ink/80 px-5 text-white placeholder:text-mist/60 outline-none transition focus:border-lime/60 focus:ring-4 focus:ring-lime/15"
              />
              <button
                type="submit"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-lime px-6 font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(198,255,61,0.6)]"
              >
                {sent ? (
                  <>
                    <Check size={16} /> Opening email
                  </>
                ) : (
                  <>
                    Join waitlist <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
            The payments platform for Pakistan. Cards, Raast, JazzCash and Easypaisa in one API. Coming soon.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Product</p>
          <ul className="mt-4 space-y-2.5 text-sm text-mist">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-mist">
            <li>
              <a href={`mailto:${WAITLIST_EMAIL}`} className="transition-colors hover:text-white">
                {WAITLIST_EMAIL}
              </a>
            </li>
            <li>
              <a href="#waitlist" className="transition-colors hover:text-white">
                Join the waitlist
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-mist sm:flex-row">
          <p>© {new Date().getFullYear()} PaySecure. All rights reserved.</p>
          <p>Features shown are in development and subject to regulatory approval.</p>
        </div>
      </div>
    </footer>
  );
}
