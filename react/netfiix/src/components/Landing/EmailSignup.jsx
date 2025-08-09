import React, { useState } from "react";
import { useNavigate } from "react-router";

const EmailSignup = ({ size = "large", showText = true }) => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your email submission logic here
    navigate("/home");
  };

  const inputClass =
    size === "large"
      ? "flex-1 px-6 py-4 text-lg"
      : "flex-1 px-4 py-3 text-base";

  const buttonClass =
    size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <div className="max-w-2xl mx-auto">
      {showText && (
        <p className="text-lg mb-8 text-gray-300">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className={`${inputClass} bg-gray-800 bg-opacity-70 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`}
        />
        <button
          onClick={handleSubmit}
          className={`${buttonClass} bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:animate-none`}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default EmailSignup;
