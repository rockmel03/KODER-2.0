import React from "react";

const Highlights = ({ highlights }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
      {highlights.map((highlight) => (
        <div key={highlight.id} className="flex-shrink-0 text-center">
          <div className="w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden mb-1">
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs">{highlight.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
