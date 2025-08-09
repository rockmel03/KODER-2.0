import React from "react";
import PlanCard from "./PlanCard";

const PlansSection = () => {
  const plans = [
    {
      name: "Mobile",
      price: "149",
      features: [
        "Mobile and tablet only",
        "480p video quality",
        "1 screen at a time",
        "Download available",
      ],
    },
    {
      name: "Basic",
      price: "199",
      features: [
        "All devices",
        "720p video quality",
        "1 screen at a time",
        "Download available",
      ],
    },
    {
      name: "Standard",
      price: "499",
      features: [
        "All devices",
        "1080p video quality",
        "2 screens at a time",
        "Download available",
      ],
    },
    {
      name: "Premium",
      price: "649",
      features: [
        "All devices",
        "4K + HDR quality",
        "4 screens at a time",
        "Download available",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 opacity-0 animate-fade-in">
          Choose the plan that's right for you
        </h2>
        <p className="text-center text-xl text-gray-300 mb-16 opacity-0 animate-fade-in">
          Join Netflix today. Cancel anytime.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              plan={plan}
              isPopular={plan.name === "Standard"}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
