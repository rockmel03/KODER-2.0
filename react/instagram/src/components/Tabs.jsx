import React from "react";
import { Grid, Film, Tag } from "lucide-react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "posts", icon: <Grid size={12} />, label: "Posts" },
    { id: "reels", icon: <Film size={12} />, label: "Reels" },
    { id: "tagged", icon: <Tag size={12} />, label: "Tagged" },
  ];

  return (
    <div className="border-t border-gray-300">
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 ${
              activeTab === tab.id
                ? "border-t-2 border-black text-black"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
