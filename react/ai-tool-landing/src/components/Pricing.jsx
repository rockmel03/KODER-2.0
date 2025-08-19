import { Check } from "lucide-react";
import React from "react";
const pricingPlans = [
  {
    name: "Starter",
    price: 19,
    period: "month",
    description: "Perfect for individuals and small projects",
    features: [
      "50,000 words/month",
      "Basic templates",
      "Email support",
      "Grammar checking",
      "Export to PDF/Word",
    ],
    popular: false,
    buttonText: "Start Free Trial",
  },
  {
    name: "Professional",
    price: 49,
    period: "month",
    description: "Ideal for content creators and small businesses",
    features: [
      "200,000 words/month",
      "All templates & tools",
      "Priority support",
      "Team collaboration (5 users)",
      "Brand voice training",
      "API access",
      "Advanced analytics",
    ],
    popular: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: 149,
    period: "month",
    description: "For large teams and organizations",
    features: [
      "Unlimited words",
      "Custom templates",
      "Dedicated support",
      "Unlimited team members",
      "Custom brand training",
      "Full API access",
      "Advanced security",
      "Custom integrations",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000`}
          >
            Simple, Transparent
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              {" "}
              Pricing
            </span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200`}
          >
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-500 hover:transform hover:scale-105 ${
                plan.popular
                  ? "border-blue-500 shadow-2xl shadow-blue-500/20"
                  : "border-gray-700/50 hover:border-blue-500/50"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  ${plan.price}
                  <span className="text-lg text-gray-400 font-normal">
                    /{plan.period}
                  </span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
                    : "bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
