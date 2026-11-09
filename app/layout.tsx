import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });

export const metadata: Metadata = {
  title: "PaySecure — Payments for Pakistan, coming soon",
  description:
    "One platform to accept cards, PayPak, Raast, JazzCash and Easypaisa. Payouts, billing, Connect, Radar fraud checks and a dashboard for every business you run. Coming soon.",
  openGraph: {
    title: "PaySecure — Payments for Pakistan",
    description: "Cards, Raast, JazzCash and Easypaisa in one API. Coming soon.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="grain font-sans">{children}</body>
    </html>
  );
}
