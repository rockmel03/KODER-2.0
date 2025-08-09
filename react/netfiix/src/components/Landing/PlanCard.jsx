import React from "react";

const PlanCard = ({ plan, isPopular = false, delay = 0 }) => {
  return (
    <div
      className={`rounded-xl p-6 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden opacity-0 animate-fade-in ${
        isPopular ? "bg-gradient-to-b from-red-600 to-red-700" : "bg-gray-800"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 text-sm font-bold rounded-b-md">
          MOST POPULAR
        </div>
      )}

      <h3 className={`text-xl font-semibold mb-2 ${isPopular ? "mt-4" : ""}`}>
        {plan.name}
      </h3>
      <div
        className={`text-3xl font-bold mb-4 ${
          isPopular ? "text-white" : "text-red-600"
        }`}
      >
        ₹{plan.price}
      </div>
      <div className={`mb-6 ${isPopular ? "text-red-200" : "text-gray-400"}`}>
        per month
      </div>

      <ul
        className={`space-y-3 text-sm mb-8 ${
          isPopular ? "text-red-100" : "text-gray-300"
        }`}
      >
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 ${
          isPopular
            ? "bg-white text-red-600 hover:bg-gray-100"
            : "bg-red-600 hover:bg-red-700 text-white"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PlanCard;
