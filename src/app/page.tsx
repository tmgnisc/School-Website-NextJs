import React from "react";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeaturesSection from "@/components/HeroSection/FeatureSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ImageCarouselSection from "@/components/ImageCarouselSection/ImageCarouselSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Testimonials from "@/components/testonomials/testimonials";
import EventsSection from "@/components/EventSection/EventSection";
import AdmissionSection from "@/components/AdmissionSection/AdmissionSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ImageCarouselSection />
      <ExperienceSection/>
      <Testimonials/>
      <EventsSection/>
      <AdmissionSection/>
      <Footer/>
    </div>
  );
}
