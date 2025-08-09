import React from "react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: "📱",
      title: "Watch anywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    },
    {
      icon: "💾",
      title: "Download your shows",
      description:
        "Save your favourites easily and always have something to watch offline.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favourite characters in a space made just for them.",
    },
  ];

  return (
    <section id="features-section" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 animate-fade-in">
          Why Netflix India?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
