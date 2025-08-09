import React from "react";

const VideoMetadata = ({ title }) => {
  return (
    <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
      {title ||
        "Complete Web Development Course - HTML, CSS, JavaScript & React"}
    </h1>
  );
};

export default VideoMetadata;
