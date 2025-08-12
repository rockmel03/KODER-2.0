import React from "react";
import { Heart, MessageCircle, Film } from "lucide-react";
import { formatNumber } from "../utils/formatNumber";

const MediaItem = ({ item, type, onClick }) => {
  return (
    <div
      className="aspect-square relative cursor-pointer group"
      onClick={() => onClick(item)}
    >
      <img src={item.image} alt="" className="w-full h-full object-cover" />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="flex items-center gap-4 text-white">
          {type === "posts" && (
            <>
              <div className="flex items-center gap-1">
                <Heart size={20} fill="white" />
                <span>{formatNumber(item.likes)}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={20} fill="white" />
                <span>{item.comments}</span>
              </div>
            </>
          )}
          {type === "reels" && (
            <div className="flex items-center gap-1">
              <Film size={20} />
              <span>{item.views}</span>
            </div>
          )}
        </div>
      </div>
      {/* Reel indicator */}
      {type === "reels" && (
        <div className="absolute top-2 right-2">
          <Film size={20} className="text-white drop-shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default MediaItem;
