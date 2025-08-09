import React from "react";

const HorizontalVideoCard = ({ video }) => {
  return (
    <div className="flex space-x-2 cursor-pointer group">
      <div className="relative w-40 flex-shrink-0">
        <div
          className={`video-thumbnail bg-gradient-to-br from-${video.color}-400 to-${video.color}-500 rounded-lg`}
        ></div>
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
          {video.title}
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {video.channel}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {video.views} views • {video.daysAgo} days ago
        </p>
      </div>
    </div>
  );
};

export default HorizontalVideoCard;
