import React from "react";
import TrendingItem from "./TrendingItem";

const TrendingSection = () => {
  const trendingItems = [
    { color: "from-red-600 to-red-800", icon: "🎬" },
    { color: "from-blue-600 to-blue-800", icon: "🎭" },
    { color: "from-green-600 to-green-800", icon: "🎪" },
    { color: "from-purple-600 to-purple-800", icon: "🎨" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 animate-fade-in">
          Trending Now in India
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingItems.map((item, index) => (
            <TrendingItem
              key={index}
              color={item.color}
              icon={item.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
