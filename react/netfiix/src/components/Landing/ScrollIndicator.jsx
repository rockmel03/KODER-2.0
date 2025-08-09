import React from "react";

const ScrollIndicator = () => {
  const handleClick = () => {
    const nextSection = document.querySelector("#features-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
