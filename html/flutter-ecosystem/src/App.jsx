import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CommunitySection from "./components/CommunitySection";
import FeaturesSection from "./components/FeaturesSection";
import { featuresData } from "./Constants";
import GetStartedSection from "./components/GetStartedSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <CommunitySection />
      {featuresData.map((item, idx) => (
        <FeaturesSection data={item} key={idx} />
      ))}

      <GetStartedSection />
      <Footer />
    </main>
  );
};

export default App;
