import React from "react";

const VideoPlayer = () => {
  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <button className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-colors">
          <svg
            className="w-12 h-12 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 progress-bar"></div>
      {/* Time display */}
      <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
        2:01:50 / 2:45:30
      </div>
    </div>
  );
};

export default VideoPlayer;
