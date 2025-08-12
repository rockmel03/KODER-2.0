import React from "react";
import { X, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const MediaModal = ({ isOpen, onClose, selectedPhoto, profileData }) => {
  if (!isOpen || !selectedPhoto) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-300"
        >
          <X size={32} />
        </button>

        <div className="bg-white rounded-lg overflow-hidden md:flex max-h-[90vh]">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center bg-black">
            <img
              src={selectedPhoto.image}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Sidebar */}
          <div className="w-80 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-200">
              <img
                src={profileData.profileImage}
                alt={profileData.fullName}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold">{profileData.username}</span>
            </div>

            {/* Comments area */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="flex gap-3 mb-4">
                <img
                  src={profileData.profileImage}
                  alt={profileData.fullName}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <span className="font-semibold mr-2">
                    {profileData.username}
                  </span>
                  <span className="text-sm">Beautiful capture! 📸</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-4 py-3 border-t border-gray-200 mt-4">
                <button className="text-gray-700 hover:text-gray-900">
                  <Heart size={24} />
                </button>
                <button className="text-gray-700 hover:text-gray-900">
                  <MessageCircle size={24} />
                </button>
                <button className="text-gray-700 hover:text-gray-900">
                  <Send size={24} />
                </button>
                <button className="ml-auto text-gray-700 hover:text-gray-900">
                  <Bookmark size={24} />
                </button>
              </div>

              {/* Likes count */}
              <div className="font-semibold text-sm mb-2">
                {selectedPhoto.likes
                  ? `${selectedPhoto.likes.toLocaleString()} likes`
                  : `${selectedPhoto.views} views`}
              </div>

              {/* Caption */}
              <div className="text-sm mb-4">
                <span className="font-semibold mr-2">
                  {profileData.username}
                </span>
                <span>
                  Check out this amazing shot! #photography #instagood
                </span>
              </div>
            </div>

            {/* Comment input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 text-sm outline-none"
                />
                <button className="text-blue-500 font-semibold text-sm">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaModal;
