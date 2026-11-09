"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useScroll, useTransform } from "motion/react";
import {

  BookOpen,
  Building2,
  Check,
  CreditCard,
  FileText,
  Fingerprint,
  Gavel,
  LayoutDashboard,
  Link2,
  Radar,
  Receipt,
  Repeat,
  Scale,
  ShieldCheck,
  Smartphone,
  SmartphoneNfc,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import clsx from "clsx";
import { Reveal, SectionHeading, SoonBadge, SpotlightCard } from "./ui";
import {
  connectFeatures,
  moneyFeatures,
  paymentFeatures,
  paymentMethods,
  platformTabs,
  radarFeatures,
  securityPoints,
  stats,
  steps,
} from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  BookOpen,
  Building2,
  CreditCard,
  FileText,
  Fingerprint,
  Gavel,
  LayoutDashboard,
  Link2,
  Radar,
  Receipt,
  Repeat,
  Scale,
  ShieldCheck,
  Smartphone,
  SmartphoneNfc,
  Users,
  Wallet,
  Zap,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const I = icons[name] ?? Zap;
  return <I className={className} />;
}

/* ---------- Payment method marquee ---------- */
export function MethodMarquee() {
  const row = [...paymentMethods, ...paymentMethods];
  return (
    <section aria-label="Planned payment methods" className="relative border-y border-line bg-ink-2/60 py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {row.map((m, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-line bg-white/[0.02] px-5 py-2 font-display text-lg text-white/80"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-lime to-mint" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Animated counters ---------- */
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="rounded-3xl border border-line bg-white/[0.02] p-6 text-center">
              <p className="font-display text-5xl font-semibold text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-mist">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Payments ---------- */
export function Payments() {
  return (
    <section id="payments" className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <SectionHeading
        eyebrow="Payments"
        title={
          <>
            Every way Pakistan pays. <span className="text-gradient">One integration.</span>
          </>
        }
        body="Cards, instant bank payments and mobile wallets behind one clean API. Turn a method on in your dashboard and it shows up in checkout."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {paymentFeatures.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <SpotlightCard className="h-full p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-lime/20 to-mint/10 text-lime ring-1 ring-lime/20">
                  <Icon name={f.icon} className="h-6 w-6" />
                </span>
                <SoonBadge />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{f.body}</p>
              {f.points && (
                <ul className="mt-6 space-y-2.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-white/85">
                      <Check size={16} className="text-mint" /> {p}
                    </li>
                  ))}
                </ul>
              )}
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Platform tabs ---------- */
export function Platform() {
  const [tab, setTab] = useState(platformTabs[0].id);
  const current = platformTabs.find((t) => t.id === tab)!;
  return (
    <section id="platform" className="relative scroll-mt-28 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-[400px] max-w-4xl rounded-full bg-violet/15 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Platform"
          title={
            <>
              Built for teams. <span className="text-gradient">And for owners with many brands.</span>
            </>
          }
          body="A merchant dashboard, fine-grained roles, multiple businesses under one login, and a locked-down super admin console behind it all."
        />

        <Reveal className="mt-14 flex justify-center">
          <div className="flex max-w-full flex-wrap justify-center gap-1 rounded-3xl border border-line bg-ink-2 p-1.5 sm:rounded-full">
            {platformTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={clsx(
                  "relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                  tab === t.id ? "text-ink" : "text-mist hover:text-white",
                )}
              >
                {tab === t.id && (
                  <motion.span layoutId="tab-bg" className="absolute inset-0 rounded-full bg-lime" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                )}
                <Icon name={t.icon} className="relative h-4 w-4" />
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 rounded-[32px] border border-line bg-ink-2/80 p-6 backdrop-blur md:grid-cols-2 md:p-10">
          <motion.div key={current.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <SoonBadge />
            <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-white">{current.title}</h3>
            <p className="mt-4 leading-relaxed text-mist">{current.body}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="flex items-center gap-2.5 text-sm text-white/85"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {p}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div key={current.id + "-v"} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <PlatformVisual id={current.id} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlatformVisual({ id }: { id: string }) {
  if (id === "teams") {
    const people = [
      { n: "Ayesha K.", r: "Administrator", c: "from-lime to-mint" },
      { n: "Bilal R.", r: "Developer", c: "from-sky to-violet" },
      { n: "Sana M.", r: "Finance", c: "from-amber-300 to-orange-500" },
      { n: "Usman T.", r: "Support", c: "from-pink-400 to-violet" },
    ];
    return (
      <div className="space-y-3">
        {people.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center justify-between rounded-2xl border border-line bg-white/[0.03] px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className={clsx("h-9 w-9 rounded-full bg-gradient-to-br", p.c)} />
              <span className="text-sm font-medium text-white">{p.n}</span>
            </div>
            <span className="rounded-full border border-line px-3 py-1 text-xs text-mist">{p.r}</span>
          </motion.div>
        ))}
        <div className="rounded-2xl border border-dashed border-lime/30 px-4 py-3 text-center text-sm text-lime">+ Invite teammate</div>
      </div>
    );
  }
  if (id === "businesses") {
    const biz = [
      { n: "Chai Wala Co.", o: "Your org", mode: "Live" },
      { n: "Lahore Threads", o: "Your org", mode: "Live" },
      { n: "Karachi Kitchens", o: "Shared with you · Developer", mode: "Test" },
    ];
    return (
      <div className="rounded-3xl border border-line bg-ink p-4">
        <p className="px-2 pb-3 text-xs uppercase tracking-wider text-mist">Switch business</p>
        {biz.map((b, i) => (
          <motion.div
            key={b.n}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={clsx("flex items-center justify-between rounded-2xl px-3 py-3", i === 0 && "bg-white/[0.05]")}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet/40 to-sky/30 font-display text-sm font-bold text-white">
                {b.n[0]}
              </span>
              <div>
                <p className="text-sm font-medium text-white">{b.n}</p>
                <p className="text-xs text-mist">{b.o}</p>
              </div>
            </div>
            <span className={clsx("rounded-full px-2 py-0.5 text-[10px] font-semibold", b.mode === "Live" ? "bg-mint/15 text-mint" : "bg-amber-400/15 text-amber-300")}>
              {b.mode}
            </span>
          </motion.div>
        ))}
        <div className="mt-2 rounded-2xl border border-dashed border-line px-3 py-3 text-center text-sm text-mist">+ Add business</div>
      </div>
    );
  }
  if (id === "admin") {
    const items = [
      { t: "KYB review · Lahore Threads", s: "Awaiting checker", c: "text-amber-300" },
      { t: "Payout release · Rs 8,40,000", s: "Approved by 2 people", c: "text-mint" },
      { t: "Radar rule change", s: "Maker submitted", c: "text-sky" },
    ];
    return (
      <div className="space-y-3">
        {items.map((x, i) => (
          <motion.div
            key={x.t}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-line bg-white/[0.03] p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white">{x.t}</p>
              <ShieldCheck size={16} className={x.c} />
            </div>
            <p className={clsx("mt-1 text-xs", x.c)}>{x.s}</p>
          </motion.div>
        ))}
        <p className="text-center text-xs text-mist">Every action is audited with who, what, when and why.</p>
      </div>
    );
  }
  // dashboard
  const bars = [38, 52, 44, 70, 58, 82, 76, 94, 68, 88, 100, 90];
  return (
    <div className="rounded-3xl border border-line bg-ink p-5">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-mist">Gross volume · today</p>
          <p className="mt-1 font-display text-3xl font-semibold text-white">Rs 3,82,150</p>
        </div>
        <span className="rounded-full bg-mint/15 px-2.5 py-1 text-xs font-semibold text-mint">+18.4%</span>
      </div>
      <div className="mt-6 flex h-36 items-end gap-2">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-lime/30 to-lime"
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
        {[
          ["Cards", "48%"],
          ["Raast", "31%"],
          ["Wallets", "21%"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-line py-2">
            <p className="text-mist">{k}</p>
            <p className="font-semibold text-white">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Money movement bento ---------- */
export function Money() {
  return (
    <section id="money" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <SectionHeading
        eyebrow="Money movement and revenue"
        title={
          <>
            From checkout to <span className="text-gradient">your bank account.</span>
          </>
        }
        body="Payouts, a ledger you can trust, billing and invoicing. The back office of a modern business, ready when you are."
      />
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {moneyFeatures.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.08}>
            <SpotlightCard className="group h-full">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.05] text-white ring-1 ring-line transition-all duration-300 group-hover:bg-lime group-hover:text-ink">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <SoonBadge />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{f.body}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Connect ---------- */
export function Connect() {
  return (
    <section id="connect" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <div className="relative overflow-hidden rounded-[36px] border border-line bg-gradient-to-br from-violet/20 via-ink-2 to-ink-2 p-8 md:p-14">
        <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SoonBadge />
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
              PaySecure Connect for platforms and marketplaces
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              Onboard sellers, split payments, take your fee and pay everyone out. Everything a marketplace needs to move money in Pakistan.
            </p>
          </div>
          <div className="relative">
            <ConnectDiagram />
          </div>
        </div>
        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {connectFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-ink/60 p-5 backdrop-blur">
                <p className="font-display text-lg font-semibold text-white">{f.title}</p>
                <p className="mt-1.5 text-sm text-mist">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectDiagram() {
  const sellers = ["Seller A", "Seller B", "Seller C"];
  return (
    <div className="relative mx-auto flex max-w-sm flex-col items-center gap-10">
      <div className="rounded-2xl border border-lime/40 bg-lime/10 px-5 py-3 text-center">
        <p className="text-xs text-mist">Customer pays</p>
        <p className="font-display text-xl font-semibold text-white">Rs 10,000</p>
      </div>
      <div className="relative rounded-2xl border border-line bg-ink px-5 py-3 text-center">
        <p className="text-xs text-mist">Your platform fee</p>
        <p className="font-display text-xl font-semibold text-lime">Rs 500</p>
        <motion.span
          className="absolute -top-10 left-1/2 h-10 w-px bg-gradient-to-b from-lime to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          style={{ originY: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div className="grid w-full grid-cols-3 gap-3">
        {sellers.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12 }}
            className="rounded-2xl border border-line bg-ink/70 px-2 py-3 text-center"
          >
            <p className="text-[11px] text-mist">{s}</p>
            <p className="text-sm font-semibold text-white">Payout</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Radar ---------- */
export function RadarSection() {
  return (
    <section id="radar" className="relative mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="min-w-0">
          <SectionHeading
            center={false}
            eyebrow="Radar, disputes and identity"
            title={
              <>
                Stop fraud <span className="text-gradient">before it costs you.</span>
              </>
            }
            body="Radar checks every payment as it happens, with signals built for how fraud works in Pakistan. When a dispute does land, you'll have the evidence ready."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {radarFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white/[0.02] p-5">
                  <Icon name={f.icon} className="h-5 w-5 text-lime" />
                  <p className="mt-3 font-display text-lg font-semibold text-white">{f.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <RadarVisual />
      </div>
    </section>
  );
}

function RadarVisual() {
  const blips = [
    { x: "62%", y: "28%", bad: false },
    { x: "30%", y: "40%", bad: false },
    { x: "70%", y: "66%", bad: true },
    { x: "40%", y: "72%", bad: false },
    { x: "22%", y: "60%", bad: false },
  ];
  return (
    <Reveal className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full border border-line bg-[radial-gradient(circle,rgba(198,255,61,0.08),transparent_65%)]" />
      {[0.75, 0.5, 0.25].map((s) => (
        <div key={s} className="absolute rounded-full border border-line" style={{ inset: `${(1 - s) * 50}%` }} />
      ))}
      <div className="absolute inset-0 animate-[spin_4s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,rgba(198,255,61,0.35),transparent_25%)]" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-line" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-line" />
      {blips.map((b, i) => (
        <motion.span
          key={i}
          className={clsx("absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full", b.bad ? "bg-red-500" : "bg-mint")}
          style={{ left: b.x, top: b.y, boxShadow: b.bad ? "0 0 20px #ef4444" : "0 0 16px #2ee6a6" }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      <motion.div
        className="absolute bottom-6 right-0 rounded-2xl border border-red-500/30 bg-ink-2/95 px-4 py-3 shadow-2xl backdrop-blur sm:-right-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-[11px] uppercase tracking-wider text-red-400">Blocked</p>
        <p className="text-sm font-medium text-white">Card testing pattern</p>
        <p className="text-xs text-mist">Risk score 91</p>
      </motion.div>
    </Reveal>
  );
}

/* ---------- Security ---------- */
export function Security() {
  return (
    <section id="security" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <SectionHeading
        eyebrow="Security and compliance"
        title={
          <>
            Bank-grade security, <span className="text-gradient">by default.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {securityPoints.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="ring-spin h-full rounded-3xl p-6" style={{ animationDelay: `${i}s` }}>
              <ShieldCheck className="h-6 w-6 text-lime" />
              <p className="mt-4 font-display text-xl font-semibold text-white">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
export function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 50%"] });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-24">
      <SectionHeading eyebrow="How it will work" title="Live in four steps." />
      <div ref={ref} className="relative mt-16">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block">
          <motion.div style={{ width }} className="h-full bg-gradient-to-r from-lime to-mint" />
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-lime/40 bg-ink font-display text-lg font-semibold text-lime">
                  {i + 1}
                </span>
                <p className="mt-5 font-display text-xl font-semibold text-white">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

