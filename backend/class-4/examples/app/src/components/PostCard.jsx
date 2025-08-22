import React, { useState } from "react";
import { Heart, MessageCircle, Share, Trash } from "lucide-react";

const PostCard = ({ post, handleLike, handleDelete }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Post Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">U</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">User</h3>
            <p className="text-gray-500 text-sm">2 hours ago</p>
          </div>
        </div>

        <button
          onClick={() => handleDelete(post._id)}
          className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200"
        >
          <Trash size={20} />
        </button>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img
          src={post.image?.url}
          alt="Post content"
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setLiked(true);
                handleLike(post._id);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 ${
                post.liked || liked
                  ? "bg-red-50 text-red-600 hover:bg-red-100"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Heart
                size={20}
                fill={post.liked || liked ? "currentColor" : "none"}
                className="transition-all duration-200"
              />
              <span className="font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all duration-200">
              <MessageCircle size={20} />
              <span className="font-medium">Comment</span>
            </button>
          </div>
          <button className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all duration-200">
            <Share size={20} />
          </button>
        </div>

        {/* Post Caption */}
        <p className="text-gray-800 leading-relaxed">{post.caption}</p>
      </div>
    </div>
  );
};

export default PostCard;
