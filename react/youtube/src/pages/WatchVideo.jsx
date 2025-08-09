import React from "react";
import VideoPlayer from "../components/Watch/VideoPlayer";
import VideoMetadata from "../components/Watch/VideoMetadata";
import ChannelSubscribe from "../components/Watch/ChannelSubscribe";
import VideoActions from "../components/Watch/VideoActions";
import VideoDescription from "../components/Watch/VideoDescription";
import CommentsSection from "../components/Watch/CommentsSection";
import RecommendedSidebar from "../components/Watch/RecommendedSidebar";

const WatchVideo = () => {
  return (
    <main className="flex-1 flex">
      {/* Video section */}
      <div className="flex-1 max-w-5xl">
        <div className="px-6 py-6">
          {/* Video player */}
          <VideoPlayer />

          {/* Video title */}
          <VideoMetadata />

          {/* Video metadata */}
          <div className="flex gap-4 flex-col-reverse items-start md:gap-0  md:flex-row md:items-center justify-between mb-4">
            <ChannelSubscribe />
            <VideoActions />
          </div>

          {/* Description */}
          <VideoDescription />

          {/* Comments section */}
          <CommentsSection />
        </div>
      </div>

      {/* Recommended videos sidebar */}
      <RecommendedSidebar />
    </main>
  );
};

export default WatchVideo;
