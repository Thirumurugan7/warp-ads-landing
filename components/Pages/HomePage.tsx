"use client";

import Timeline from "@/components/Sections/Timeline";
import NavSection from "@/components/Sections/NavSection";
import CallToValue from "@/components/Sections/CallToValue";
import Vision from "@/components/Sections/Vision";
import Footer from "@/components/Sections/Footer";
import HeroSection from "@/components/Sections/HeroSection";

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
