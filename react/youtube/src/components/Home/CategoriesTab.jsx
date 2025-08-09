import React from "react";
import { NavLink } from "react-router";

const CategoriesTab = () => {
  const categories = [
    { title: "all", link: "/" },
    { title: "gaming", link: "/gaming" },
    { title: "music", link: "/music" },
    { title: "live", link: "/live" },
    { title: "news", link: "/news" },
    { title: "sports", link: "/sports" },
    { title: "learning", link: "/learning" },
  ];
  return (
    <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-20">
      <div className="flex space-x-3 px-6 py-3 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <NavLink
            to={category.link}
            key={category.link}
            className={({ isActive }) =>
              `px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 capitalize ${
                isActive ? "bg-gray-200 dark:bg-gray-700" : ""
              }`
            }
          >
            {category.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesTab;
