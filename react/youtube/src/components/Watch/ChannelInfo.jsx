import React from "react";

const ChannelInfo = ({
  channelName = "TechCourse",
  subscriberCount = "2.3M subscribers",
  avatarText = "TC",
}) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold">{avatarText}</span>
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">
          {channelName}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {subscriberCount}
        </p>
      </div>
    </div>
  );
};

export default ChannelInfo;
