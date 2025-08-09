import React from "react";
import EmailSignup from "./EmailSignup";
import ScrollIndicator from "./ScrollIndicator";

const HeroSection = () => {
  return (
    <section className="w-full h-screen">
      {/* background image */}
      <div className="relative z-10 w-full h-full">
        <img className="w-full h-full object-cover" src="/hero-bg.jpg" alt="" />
      </div>

      {/* background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-red-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>
      </div>

      <div className="absolute z-10 top-0 w-full h-full bg-black/40 flex items-center justify-center">
        {/* Hero Content */}
        <div className="   z-10 text-center max-w-4xl mx-auto px-6 opacity-0 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Starts at ₹149. Cancel anytime.
          </p>
          <EmailSignup />
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
