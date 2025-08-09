import React from "react";
import HorizontalVideoCard from "../VideoCards/HorizontalVideoCard";

const RelatedVideos = () => {
  const relatedVideos = [
    {
      thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
      title: "Complete Web Development Course - HTML, CSS, JavaScript & React",
      duration: "2:01:50",
      views: "1.2M",
      daysAgo: "3",
      channel: "TechCourse",
      color: "red",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
      title: "Build a RESTful API with Node.js & Express",
      duration: "1:30:00",
      views: "2.5M",
      daysAgo: "6",
      channel: "TechCourse",
      color: "blue",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
      title: "Learn React Hooks by Building a Real-World App",
      duration: "1:18:00",
      views: "4.5M",
      daysAgo: "1",
      channel: "Traversy Media",
      color: "green",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
      title: "CSS Grid Full Course | Build Responsive Webs",
      duration: "2:01:50",
      views: "1.2M",
      daysAgo: "3",
      channel: "TechCourse",
      color: "orange",
    },
    {
      thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg",
      title: "Build a RESTful API with Node.js & Express",
      duration: "1:30:00",
      views: "2.5M",
      daysAgo: "6",
      channel: "TechCourse",
      color: "purple",
    },
  ];

  return (
    <div className="space-y-3">
      {relatedVideos.map((video, idx) => (
        <HorizontalVideoCard key={idx} video={video} />
      ))}
    </div>
  );
};

export default RelatedVideos;
