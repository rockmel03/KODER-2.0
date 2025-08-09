import React from "react";
import Navigation from "../components/Landing/Navigation";
import HeroSection from "../components/Landing/HeroSection";
import FeaturesSection from "../components/Landing/FeaturesSection";
import PlansSection from "../components/Landing/PlansSection";
import FAQSection from "../components/Landing/FAQSection";
import Footer from "../components/Footer";
import TrendingSection from "../components/Landing/TrendingSection";

const Landing = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TrendingSection />
      <PlansSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Landing;
