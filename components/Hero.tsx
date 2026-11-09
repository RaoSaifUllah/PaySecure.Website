"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, CreditCard, Lock, ShieldCheck, Smartphone, Zap, Languages } from "lucide-react";
import clsx from "clsx";
import { Button, SoonBadge } from "./ui";

const methods = [
  { id: "card", label: "Card", icon: CreditCard, hint: "Visa · Mastercard · PayPak", color: "from-sky/30 to-violet/30" },
  { id: "raast", label: "Raast", icon: Zap, hint: "Pay from any bank app", color: "from-lime/30 to-mint/30" },
  { id: "jazzcash", label: "JazzCash", icon: Smartphone, hint: "Approve with OTP", color: "from-red-500/30 to-amber-400/30" },
  { id: "easypaisa", label: "Easypaisa", icon: Smartphone, hint: "Approve in the app", color: "from-emerald-400/30 to-lime/30" },
];

const headline = ["Payments", "for", "Pakistan,"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] animate-aurora rounded-full bg-lime/20 blur-[120px]" />
        <div className="absolute -right-32 top-40 h-[520px] w-[520px] animate-aurora rounded-full bg-violet/25 blur-[130px] [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] animate-aurora rounded-full bg-mint/15 blur-[120px] [animation-delay:-12s]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <SoonBadge />
            <span className="ml-3 text-sm text-mist" lang="ur" dir="rtl">
              پاکستان کے لیے ادائیگیاں
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl">
            {headline.map((w, i) => (
              <motion.span
                key={w}
                className="mr-[0.25em] inline-block"
                initial={{ opacity: 0, y: 40, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="text-gradient block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              done right.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist"
          >
            One platform to accept cards, PayPak, Raast, JazzCash and Easypaisa. Get paid out to your bank, bill
            customers, run marketplaces and stop fraud, all from a dashboard built for every business you run.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button href="#waitlist">
              Join the waitlist <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#payments" variant="ghost">
              Explore features
            </Button>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 1.1 } } }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist"
          >
            {[
              { icon: ShieldCheck, t: "PCI DSS 4.0.1 by design" },
              { icon: Lock, t: "SBP-aligned" },
              { icon: Zap, t: "PKR native" },
              { icon: Languages, t: "English and اردو" },
            ].map(({ icon: I, t }) => (
              <motion.li
                key={t}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2"
              >
                <I size={16} className="text-lime" /> {t}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <CheckoutMock />
      </div>
    </section>
  );
}

function CheckoutMock() {
  const [active, setActive] = useState(0);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setPaid(true);
      setTimeout(() => {
        setPaid(false);
        setActive((a) => (a + 1) % methods.length);
      }, 1600);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  const m = methods[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md [perspective:1200px]"
    >
      {/* floating chips */}
      <motion.div
        className="absolute -left-14 -top-8 z-20 hidden animate-float rounded-2xl border border-line bg-ink-2/90 px-4 py-3 shadow-2xl backdrop-blur sm:block"
        style={{ animationDelay: "-2s" }}
      >
        <p className="text-[11px] uppercase tracking-wider text-mist">Radar score</p>
        <p className="font-display text-lg font-semibold text-white">
          Low risk <span className="text-mint">• 12</span>
        </p>
      </motion.div>
      <motion.div className="absolute -right-10 -bottom-10 z-20 hidden animate-float rounded-2xl border border-line bg-ink-2/90 px-4 py-3 shadow-2xl backdrop-blur sm:block">
        <p className="text-[11px] uppercase tracking-wider text-mist">Next payout</p>
        <p className="font-display text-lg font-semibold text-white">Rs 1,24,500</p>
      </motion.div>

      <div className="ring-spin rounded-[28px] p-px shadow-[0_40px_120px_-40px_rgba(198,255,61,0.35)]">
        <div className="rounded-[27px] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-mist">Paying Chai Wala Co.</p>
              <p className="mt-1 font-display text-3xl font-semibold text-white">Rs 4,500</p>
            </div>
            <div className={clsx("h-12 w-12 rounded-2xl bg-gradient-to-br transition-all duration-700", m.color)} />
          </div>

          <div className="mt-6 grid grid-cols-4 gap-2">
            {methods.map((x, i) => (
              <button
                key={x.id}
                onClick={() => {
                  setActive(i);
                  setPaid(false);
                }}
                className={clsx(
                  "relative flex flex-col items-center gap-1.5 rounded-2xl border px-1 py-3 text-[11px] font-medium transition-colors",
                  i === active ? "border-lime/50 text-white" : "border-line text-mist hover:text-white",
                )}
              >
                {i === active && (
                  <motion.span layoutId="method-pill" className="absolute inset-0 rounded-2xl bg-lime/10" transition={{ type: "spring", bounce: 0.25 }} />
                )}
                <x.icon size={18} className="relative" />
                <span className="relative">{x.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-5 h-[132px] rounded-2xl border border-line bg-white/[0.02] p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs text-mist">{m.hint}</p>
                {m.id === "card" ? (
                  <div className="mt-3 space-y-2">
                    <div className="rounded-xl border border-line bg-ink px-3 py-2.5 font-mono text-sm text-white">4242 4242 4242 4242</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-line bg-ink px-3 py-2 font-mono text-sm text-mist">12 / 29</div>
                      <div className="rounded-xl border border-line bg-ink px-3 py-2 font-mono text-sm text-mist">•••</div>
                    </div>
                  </div>
                ) : m.id === "raast" ? (
                  <div className="mt-3 flex items-center gap-4">
                    <QrGlyph />
                    <p className="text-sm text-white">
                      Scan with your bank app
                      <br />
                      <span className="text-mist">or enter your Raast ID</span>
                    </p>
                  </div>
                ) : (
                  <div className="mt-3 space-y-2">
                    <div className="rounded-xl border border-line bg-ink px-3 py-2.5 font-mono text-sm text-white">0300 1234567</div>
                    <p className="text-xs text-mist">You&apos;ll get a prompt on your phone to approve.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative mt-5 h-12 overflow-hidden rounded-full">
            <AnimatePresence mode="wait" initial={false}>
              {paid ? (
                <motion.div
                  key="paid"
                  initial={{ y: 48 }}
                  animate={{ y: 0 }}
                  exit={{ y: -48 }}
                  className="absolute inset-0 flex items-center justify-center gap-2 rounded-full bg-mint font-semibold text-ink"
                >
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
                    <Check size={18} strokeWidth={3} />
                  </motion.span>
                  Payment succeeded
                </motion.div>
              ) : (
                <motion.div
                  key="pay"
                  initial={{ y: 48 }}
                  animate={{ y: 0 }}
                  exit={{ y: -48 }}
                  className="absolute inset-0 flex items-center justify-center gap-2 rounded-full bg-lime font-semibold text-ink"
                >
                  <Lock size={16} /> Pay Rs 4,500
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="mt-3 text-center text-[11px] text-mist">Preview only. PaySecure is coming soon.</p>
        </div>
      </div>
    </motion.div>
  );
}

function QrGlyph() {
  // Decorative QR-like pattern
  const cells = "1110111010101011101110001000111011101".split("");
  return (
    <div className="grid h-16 w-16 shrink-0 grid-cols-6 gap-[2px] rounded-lg bg-white p-1.5">
      {Array.from({ length: 36 }).map((_, i) => (
        <span key={i} className={cells[i % cells.length] === "1" ? "bg-ink" : "bg-transparent"} />
      ))}
    </div>
  );
}
