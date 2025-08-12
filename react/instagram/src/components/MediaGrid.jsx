import React from "react";
import MediaItem from "./MediaItem";

const MediaGrid = ({ items, type, onItemClick }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {items.map((item) => (
        <MediaItem
          key={item.id}
          item={item}
          type={type}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default MediaGrid;
