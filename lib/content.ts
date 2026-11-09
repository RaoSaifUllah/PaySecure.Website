// Feature content for the marketing site.
// Source: PaySecure SRS (Documents/Meta, esp. ch. 62 Stripe Parity Catalog, 63 Organizations)
// and the Architecture docs. Everything here is pre-launch and shown as "coming soon".

export const navLinks = [
  { label: "Payments", href: "#payments" },
  { label: "Platform", href: "#platform" },
  { label: "Radar", href: "#radar" },
  { label: "Developers", href: "#developers" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export const paymentMethods = [
  "Visa",
  "Mastercard",
  "PayPak",
  "UnionPay",
  "Raast",
  "JazzCash",
  "Easypaisa",
  "NayaPay",
  "SadaPay",
  "Upaisa",
  "Zindigi",
  "IBFT",
  "Bank transfer",
];

export const stats = [
  { value: 1, suffix: "", label: "API for cards, Raast and wallets" },
  { value: 60, suffix: "+", label: "products on the roadmap" },
  { value: 2, suffix: "", label: "languages: English and Urdu" },
  { value: 24, suffix: "/7", label: "Radar fraud checks" },
];

export type Feature = {
  icon: string;
  title: string;
  body: string;
  points?: string[];
};

export const paymentFeatures: Feature[] = [
  {
    icon: "CreditCard",
    title: "Cards, PayPak included",
    body: "Accept Visa, Mastercard, UnionPay and PayPak with automatic BIN detection, 3D Secure 2 and smart routing across acquirers.",
    points: ["3DS 2.x with risk-based challenge", "Auth and capture, or capture later", "Full, partial and multiple refunds"],
  },
  {
    icon: "Zap",
    title: "Raast, instantly",
    body: "Let customers pay straight from their bank app with Raast P2M. Money moves in seconds and returns are built in.",
    points: ["Pay by QR or Raast ID", "Instant confirmation", "Raast returns for refunds"],
  },
  {
    icon: "Smartphone",
    title: "JazzCash and Easypaisa",
    body: "Mobile wallets are first-class, not an afterthought. One integration covers JazzCash, Easypaisa, NayaPay, SadaPay and more.",
    points: ["OTP and in-app approvals", "Wallet-aware refunds", "Same API as cards"],
  },
  {
    icon: "Link2",
    title: "Payment Links and Checkout",
    body: "Sell on WhatsApp and Instagram with a link or a QR poster. Or drop in a hosted checkout that speaks Urdu and English.",
    points: ["Share on WhatsApp in one tap", "Hosted and embedded checkout", "Pakistani address format"],
  },
];

export const platformTabs = [
  {
    id: "dashboard",
    label: "Merchant dashboard",
    icon: "LayoutDashboard",
    title: "Everything about your business, in one place",
    body: "See payments, balances, payouts, customers and disputes in real time. Search anything, export reports, refund in two clicks, and switch between test and live mode.",
    points: ["Live payments and balance view", "Search and filter every transaction", "Reports and CSV exports", "Virtual terminal for phone orders"],
  },
  {
    id: "teams",
    label: "Teams and roles",
    icon: "Users",
    title: "Give every teammate exactly the access they need",
    body: "Invite your team with built-in roles like Administrator, Developer, Finance, Support and Analyst, or build your own custom roles. Every action is permission-checked and audited.",
    points: ["Built-in and custom roles", "MFA and passkeys", "SSO with SAML or OIDC", "Full audit log"],
  },
  {
    id: "businesses",
    label: "Multiple businesses",
    icon: "Building2",
    title: "One login, every brand you run",
    body: "Run several businesses under one organization, each with its own KYB, bank account, keys and balances. Work for other owners too, with a different role in each, without a second account.",
    points: ["Account switcher across brands", "Consolidated org reporting", "Business templates", "Separate keys and balances"],
  },
  {
    id: "admin",
    label: "Super admin console",
    icon: "ShieldCheck",
    title: "A back office built for trust",
    body: "PaySecure's own operations team works from a locked-down console: KYB review queues, risk reviews and finance actions all go through maker-checker approval and are fully audited.",
    points: ["Maker-checker approvals", "KYB and AML review queues", "Just-in-time access", "Every action audited"],
  },
];

export const moneyFeatures: Feature[] = [
  {
    icon: "Wallet",
    title: "Payouts",
    body: "Scheduled or manual payouts straight to your IBAN, with instant payouts over Raast on the way.",
  },
  {
    icon: "BookOpen",
    title: "Double-entry ledger",
    body: "Every rupee is tracked in a balanced, append-only ledger. Available, pending and reserved balances you can trust.",
  },
  {
    icon: "Scale",
    title: "Settlement and reconciliation",
    body: "Automatic settlement from every acquirer and wallet, reconciled line by line with clear payout reports.",
  },
  {
    icon: "Repeat",
    title: "Billing and subscriptions",
    body: "Plans, trials, proration, coupons and smart retries that understand both cards and wallets.",
  },
  {
    icon: "FileText",
    title: "Invoicing",
    body: "Branded invoices with hosted pages, PDFs, credit notes and reminders. Paid by card, Raast or wallet.",
  },
  {
    icon: "Receipt",
    title: "Tax",
    body: "Federal and provincial sales tax support with NTN and STRN capture and FBR-ready exports.",
  },
];

export const connectFeatures = [
  { title: "Onboard sellers", body: "Hosted onboarding with KYB in Urdu and English." },
  { title: "Split every payment", body: "Direct, destination and separate charges with transfers." },
  { title: "Earn on every sale", body: "Take application fees automatically on each payment." },
  { title: "Pay out your sellers", body: "Scheduled payouts to every connected account." },
];

export const radarFeatures: Feature[] = [
  {
    icon: "Radar",
    title: "Radar fraud checks",
    body: "Every payment is scored in real time. Start with rules and lists, then let machine learning catch what rules miss.",
  },
  {
    icon: "SmartphoneNfc",
    title: "Local fraud signals",
    body: "Detection tuned for Pakistan: SIM swaps, mule accounts, card testing and wallet abuse.",
  },
  {
    icon: "Gavel",
    title: "Disputes and chargebacks",
    body: "Clear dispute timelines, an evidence library and automatic evidence packs to help you win.",
  },
  {
    icon: "Fingerprint",
    title: "PaySecure Identity",
    body: "Verify people with CNIC and liveness checks, and confirm bank accounts with IBAN title fetch.",
  },
];

export const securityPoints = [
  { title: "PCI DSS 4.0.1", body: "Designed to the full standard from day one, with a tokenization vault so card data never touches your servers." },
  { title: "SBP-aligned", body: "Built around State Bank of Pakistan PSO/PSP rules and the 2025 TRM framework." },
  { title: "Encrypted everywhere", body: "Keys in HSMs, encryption in transit and at rest, and crypto-agility ready for post-quantum." },
  { title: "Tenant isolation", body: "Every business is its own security boundary. No cross-tenant access, ever." },
];

export const devFeatures = [
  "REST API with idempotency and versioning",
  "Webhooks and events",
  "Test mode with simulators for every provider",
  "SDKs for Node, Python, PHP, .NET, Java and Go",
  "PaySecure.js and Elements",
  "CLI, sandboxes and request logs",
];

export const steps = [
  { title: "Sign up", body: "Create your organization and first business in minutes." },
  { title: "Verify", body: "Complete KYB online with your CNIC, NTN and business IBAN." },
  { title: "Integrate", body: "Use the API, a Payment Link or hosted Checkout. Test mode is ready on day one." },
  { title: "Get paid", body: "Accept cards, Raast and wallets, and receive payouts to your bank." },
];

export const roadmap = [
  {
    phase: "Phase 1",
    name: "Launch",
    items: ["Cards incl. PayPak", "Raast P2M", "JazzCash and Easypaisa", "Payment Links", "Merchant dashboard", "Teams, roles and multiple businesses", "Radar rules", "API, webhooks and test mode"],
  },
  {
    phase: "Phase 2",
    name: "Growth",
    items: ["Hosted Checkout", "Billing and invoicing", "Connect for marketplaces", "Scheduled payouts and reserves", "Disputes", "Radar machine learning", "PaySecure Identity", "CLI and sandboxes"],
  },
  {
    phase: "Phase 3",
    name: "Enterprise",
    items: ["SSO and SCIM", "Embedded Connect components", "Instant payouts", "Usage-based billing", "PaySecure SQL and data exports", "Mobile app", "PaySecure Pass"],
  },
  {
    phase: "Phase 4",
    name: "Frontier",
    items: ["Tap to Pay on Android", "Network tokens", "Agentic commerce", "Multi-currency presentment"],
  },
];

export const faqs = [
  {
    q: "When does PaySecure launch?",
    a: "We are building PaySecure now. Join the waitlist and we will let you know as soon as early access opens for your business.",
  },
  {
    q: "Which payment methods will be supported?",
    a: "At launch we are planning cards (Visa, Mastercard, UnionPay and PayPak), Raast, JazzCash and Easypaisa, with more wallets like NayaPay and SadaPay following.",
  },
  {
    q: "Can I run more than one business?",
    a: "Yes. One login can own or work in many businesses. Each business has its own verification, bank account, keys and balances, and you switch between them in one click.",
  },
  {
    q: "Is PaySecure secure and compliant?",
    a: "PaySecure is being designed to PCI DSS 4.0.1 and State Bank of Pakistan requirements. Card data is tokenized in a dedicated vault and never touches your servers.",
  },
  {
    q: "I already use Stripe elsewhere. Will PaySecure feel familiar?",
    a: "Very. Our API follows the same conventions, objects and webhook patterns, so developers who know Stripe will be productive on day one.",
  },
  {
    q: "Does it support Urdu?",
    a: "Yes. Checkout, receipts and the dashboard are being built for both English and Urdu, including right-to-left layouts.",
  },
];
