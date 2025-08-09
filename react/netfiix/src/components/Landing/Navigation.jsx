import { Link } from "react-router";
import React from "react";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-red-600 text-4xl font-bold tracking-tight">
          <Link to="/home">NETFLIX</Link>
        </div>
        <div className="flex items-center space-x-4">
          <select className="bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-600">
            <option>🌐 हिन्दी</option>
            <option>🌐 English</option>
          </select>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/30">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
