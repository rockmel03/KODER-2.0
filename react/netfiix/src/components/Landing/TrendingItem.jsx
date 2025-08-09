import React from "react";

const TrendingItem = ({ color, icon, delay = 0 }) => {
  return (
    <div
      className="relative group transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`aspect-video bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}
      >
        <span className="text-2xl font-bold">{icon}</span>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors transform hover:scale-105">
          ▶ Play
        </button>
      </div>
    </div>
  );
};

export default TrendingItem;
