import React from "react";

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <div
      className="text-center p-8 bg-gray-800 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
