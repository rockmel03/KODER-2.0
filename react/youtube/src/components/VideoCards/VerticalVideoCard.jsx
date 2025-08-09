import React from "react";

const VerticalVideoCard = () => {
  return (
    <div className="cursor-pointer group">
      <div className="relative video-thumbnail bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
        <div className="w-full aspect-video"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-80"></div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          12:34
        </div>
      </div>
      <div className="flex mt-3 space-x-3">
        <div className="w-9 h-9 bg-red-500 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <h3 className="text-gray-900 dark:text-white font-medium line-clamp-2 group-hover:text-blue-600">
            Amazing Web Development Tutorial - Build Modern Apps
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            TechChannel
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            1.2M views • 3 days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalVideoCard;
