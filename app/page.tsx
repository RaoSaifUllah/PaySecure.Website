import { MotionConfig } from "motion/react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Connect, MethodMarquee, Money, Payments, Platform, RadarSection, Security, Stats, Steps } from "@/components/Sections";
import { Developers, Faq, Footer, Roadmap, Waitlist } from "@/components/More";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <MethodMarquee />
        <Stats />
        <Payments />
        <Platform />
        <Money />
        <Connect />
        <RadarSection />
        <Developers />
        <Security />
        <Steps />
        <Roadmap />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </MotionConfig>
  );
}
