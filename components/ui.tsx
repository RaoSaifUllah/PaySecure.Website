"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import clsx from "clsx";
import type { ReactNode, MouseEvent } from "react";

/** Fade-and-rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & Omit<HTMLMotionProps<"div">, "children">) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-mist">
      <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_var(--color-lime)]" />
      {children}
    </span>
  );
}

export function SoonBadge({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-lime",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
      </span>
      Coming soon
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={clsx("max-w-3xl", center && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {body && <p className="mt-5 text-lg leading-relaxed text-mist">{body}</p>}
    </Reveal>
  );
}

/** Card whose glow follows the cursor. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  }
  return (
    <div
      onMouseMove={onMove}
      className={clsx(
        "spotlight rounded-3xl border border-line bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-colors duration-300 hover:border-white/15",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-lime text-ink shadow-[0_0_0_0_rgba(198,255,61,0.5)] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(198,255,61,0.6)]"
          : "border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.07]",
        className,
      )}
    >
      {children}
    </a>
  );
}
