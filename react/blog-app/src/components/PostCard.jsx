import React from "react";
import { Clock } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router";
import { formatDate } from "../utils/date";

const PostCard = ({ post }) => {
  const { isDarkMode } = useAppContext();
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/post/${post.id}`)}
      className={`cursor-pointer group ${
        isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-50"
      } transition-all duration-200 rounded-lg p-6 -mx-6`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {post.author}
            </span>
            <span
              className={`mx-2 ${
                isDarkMode ? "text-gray-600" : "text-gray-400"
              }`}
            >
              ·
            </span>
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {formatDate(post.date)}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-200">
            {post.title}
          </h3>

          <p
            className={`text-base mb-4 leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock
                className={`h-4 w-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {post.readTime}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs rounded-full ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-48 md:flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-32 md:h-24 object-cover rounded-lg"
          />
        </div>
      </div>
    </article>
  );
};

export default PostCard;
