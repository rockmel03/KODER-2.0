import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import Highlights from "./Highlights";
import Tabs from "./Tabs";
import MediaGrid from "./MediaGrid";
import MediaModal from "./MediaModal";

const InstagramProfile = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data for profile
  const profileData = {
    username: "johndoe_photography",
    fullName: "John Doe",
    bio: "📸 Professional Photographer\n🌎 Travel Enthusiast\n✨ Capturing moments that matter\n📧 john@photography.com",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    posts: 247,
    followers: 12500,
    following: 890,
    isVerified: true,
    isFollowing: false,
  };

  // Dummy data for highlights
  const highlights = [
    {
      id: 1,
      title: "Travel",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=77&h=77&fit=crop",
    },
    {
      id: 2,
      title: "Food",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=77&h=77&fit=crop",
    },
    {
      id: 3,
      title: "Nature",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=77&h=77&fit=crop",
    },
    {
      id: 4,
      title: "Portrait",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c04a9044?w=77&h=77&fit=crop",
    },
    {
      id: 5,
      title: "City",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=77&h=77&fit=crop",
    },
  ];

  // Dummy data for posts
  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      likes: 1234,
      comments: 56,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop",
      likes: 892,
      comments: 23,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
      likes: 2156,
      comments: 89,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
      likes: 743,
      comments: 34,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop",
      likes: 1567,
      comments: 67,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c04a9044?w=300&h=300&fit=crop",
      likes: 934,
      comments: 45,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop",
      likes: 1876,
      comments: 92,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&h=300&fit=crop",
      likes: 654,
      comments: 28,
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      likes: 2345,
      comments: 134,
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&h=300&fit=crop",
      likes: 1123,
      comments: 56,
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=300&fit=crop",
      likes: 987,
      comments: 41,
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop",
      likes: 1654,
      comments: 73,
    },
  ];

  const reels = [
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&h=300&fit=crop",
      views: "12.5K",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=300&h=300&fit=crop",
      views: "8.2K",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=300&h=300&fit=crop",
      views: "15.7K",
    },
    {
      id: 16,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
      views: "22.1K",
    },
  ];

  const tagged = [
    {
      id: 17,
      image:
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=300&fit=crop",
    },
    {
      id: 18,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
    },
  ];

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    document.body.style.overflow = "unset";
  };

  const getCurrentTabContent = () => {
    switch (activeTab) {
      case "posts":
        return { items: posts, type: "posts" };
      case "reels":
        return { items: reels, type: "reels" };
      case "tagged":
        return { items: tagged, type: "tagged" };
      default:
        return { items: posts, type: "posts" };
    }
  };

  const { items, type } = getCurrentTabContent();

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      <ProfileHeader username={profileData.username} />
      <ProfileInfo profileData={profileData} />
      <Highlights highlights={highlights} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MediaGrid items={items} type={type} onItemClick={openModal} />
      <MediaModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedPhoto={selectedPhoto}
        profileData={profileData}
      />
    </div>
  );
};

export default InstagramProfile;
