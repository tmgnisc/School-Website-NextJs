import React from "react";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeaturesSection from "@/components/HeroSection/FeatureSection";
import AboutSection from "@/components/AboutSection/AboutSection";

export default function Home() {
  return (
    <div>
      {/* Reusable Header Component */}
      <Header />
      <HeroSection/>
      <FeaturesSection/>
      <AboutSection/>
    </div>
  );
}
