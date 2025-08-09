import React from "react";
import RelatedVideos from "./RelatedVideos";

const RecommendedSidebar = () => {
  return (
    <div className="w-80 xl:w-96 p-4 hidden lg:block">
      <div className="space-y-3">
        {/* Up next */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-gray-900 dark:text-white">
              Up next
            </h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Autoplay
            </button>
          </div>

          {/* Next video */}
          <div className="flex space-x-2 cursor-pointer group mb-4">
            <div className="relative w-40 flex-shrink-0">
              <div className="video-thumbnail bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                15:32
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                Advanced React Hooks - useContext, useReducer & Custom Hooks
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                TechCourse
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                892K views • 3 days ago
              </p>
            </div>
          </div>
        </div>

        {/* Related videos */}
        <div className="space-y-3">
          <RelatedVideos />
        </div>
      </div>
    </div>
  );
};

export default RecommendedSidebar;
