import React from "react";
import { Link } from "react-router";
import { useAppContext } from "../context/AppContext";

import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { isDarkMode, toggleTheme } = useAppContext();

  return (
    <header
      className={`border-b transition-colors duration-300 ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <Link to={"/"}>Medium</Link>
            </h1>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isDarkMode
                ? "hover:bg-gray-800 text-gray-300 hover:text-gray-100"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
