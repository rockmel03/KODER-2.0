import React from "react";

const VideoDescription = ({
  views = "1,234,567 views",
  date = "Jan 15, 2025",
  description = {
    intro:
      "Learn complete web development from scratch! This comprehensive course covers everything you need to know to become a professional web developer.",
    content:
      "📚 What you'll learn: • HTML5 fundamentals and semantic markup • CSS3 styling, Flexbox, and Grid layout • JavaScript ES6+ features and DOM manipulation • React.js components, hooks, and state management • Responsive design principles • Modern development tools and workflow",
    timestamps:
      "🔥 Timestamps: 00:00 - Introduction 05:30 - HTML Basics 45:15 - CSS Fundamentals 1:30:20 - JavaScript Essentials 2:01:50 - React.js Introduction ← You are here 2:35:10 - Final Project",
  },
}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span className="font-medium">{views}</span>
        <span>{date}</span>
      </div>
      <div
        id="description"
        className="text-gray-900 dark:text-white description-collapsed"
      >
        <p className="mb-2">{description.intro}</p>
        <p className="mb-2">{description.content}</p>
        <p className="mb-2">{description.timestamps}</p>
      </div>
      <button
        id="showMoreBtn"
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm mt-2"
      >
        Show more
      </button>
    </div>
  );
};

export default VideoDescription;
