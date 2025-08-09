import React from "react";

const CommentsSection = ({ commentCount = "1,247 Comments" }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-6 mb-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          {commentCount}
        </h3>
        <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
          <span className="text-sm font-medium">Sort by</span>
        </button>
      </div>

      {/* Add comment */}
      <div className="flex space-x-3 mb-6">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-semibold">U</span>
        </div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white"
          />
        </div>
      </div>

      {/* Comments */}
      <div className="space-y-4">
        {[...new Array(4)].map((item, idx) => (
          <div key={idx} className="flex space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold">J</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900 dark:text-white">
                  @johndev
                </span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <p className="text-gray-900 dark:text-white mb-2">
                This is exactly what I needed! The React section starting at
                2:01:50 is incredibly well explained. Thanks for this amazing
                tutorial! 🔥
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>124</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg
                    className="w-4 h-4 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>3</span>
                </button>
                <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
