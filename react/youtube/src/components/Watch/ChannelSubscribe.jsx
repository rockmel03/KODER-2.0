import React from "react";
import ChannelInfo from "./ChannelInfo";

const ChannelSubscribe = ({
  channelName = "TechCourse",
  subscriberCount = "2.3M subscribers",
  avatarText = "TC",
}) => {
  return (
    <div className="flex items-center space-x-4">
      <ChannelInfo
        channelName={channelName}
        subscriberCount={subscriberCount}
        avatarText={avatarText}
      />
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition-colors">
        Subscribe
      </button>
    </div>
  );
};

export default ChannelSubscribe;
