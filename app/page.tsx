"use client";

import Timeline from "@/components/sections/timeline";
import NavSection from "@/components/sections/NavSection";
import CallToValue from "@/components/sections/CallToValue";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";

export default function HomePage() {
  return <div className="relative bg-slate-950 min-h-screen">
    <NavSection />
    <HeroSection />
    <CallToValue />
    <Vision />
    <Timeline />
    <Footer />
  </div>
}
