import React, { useState } from "react";

const FAQItem = ({ question, answer, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-gray-800 rounded-lg opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        className="w-full text-left p-6 focus:outline-none focus:bg-gray-700 transition-colors rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">{question}</span>
          <span
            className={`text-2xl transform transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="px-6 text-gray-300 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
