import React from "react";

const WatchVideo = () => {
  return (
    <main className="flex-1 flex">
      {/* <!-- Video section --> */}
      <div className="flex-1 max-w-5xl">
        <div className="px-6 py-6">
          {/* <!-- Video player --> */}
          <div className="relative video-player bg-black rounded-lg overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
              <button className="bg-red-600 hover:bg-red-700 rounded-full p-4 transition-colors">
                <svg
                  className="w-12 h-12 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            {/* <!-- Progress bar --> */}
            <div className="absolute bottom-0 left-0 right-0 progress-bar"></div>
            {/* <!-- Time display --> */}
            <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              2:01:50 / 2:45:30
            </div>
          </div>

          {/* <!-- Video title --> */}
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Complete Web Development Course - HTML, CSS, JavaScript & React
          </h1>

          {/* <!-- Video metadata --> */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">TC</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    TechCourse
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2.3M subscribers
                  </p>
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-medium transition-colors">
                Subscribe
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span className="text-sm">8.2K</span>
                </button>
                <div className="w-px bg-gray-300 dark:bg-gray-600"></div>
                <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg
                    className="w-5 h-5 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span className="text-sm">142</span>
                </button>
              </div>

              <button className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                <span className="text-sm">Share</span>
              </button>

              <button className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="text-sm">Download</span>
              </button>

              <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Description --> */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span className="font-medium">1,234,567 views</span>
              <span>Jan 15, 2025</span>
            </div>
            <div
              id="description"
              className="text-gray-900 dark:text-white description-collapsed"
            >
              <p className="mb-2">
                Learn complete web development from scratch! This comprehensive
                course covers everything you need to know to become a
                professional web developer.
              </p>
              <p className="mb-2">
                📚 What you'll learn: • HTML5 fundamentals and semantic markup •
                CSS3 styling, Flexbox, and Grid layout • JavaScript ES6+
                features and DOM manipulation • React.js components, hooks, and
                state management • Responsive design principles • Modern
                development tools and workflow
              </p>
              <p className="mb-2">
                🔥 Timestamps: 00:00 - Introduction 05:30 - HTML Basics 45:15 -
                CSS Fundamentals 1:30:20 - JavaScript Essentials 2:01:50 -
                React.js Introduction ← You are here 2:35:10 - Final Project
              </p>
            </div>
            <button
              id="showMoreBtn"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium text-sm mt-2"
            >
              Show more
            </button>
          </div>

          {/* <!-- Comments section --> */}
          <div className="mb-6">
            <div className="flex items-center space-x-6 mb-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                1,247 Comments
              </h3>
              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                  />
                </svg>
                <span className="text-sm font-medium">Sort by</span>
              </button>
            </div>

            {/* <!-- Add comment --> */}
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
              {/* Comment 1 */}
              <div className="flex space-x-3">
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
                    2:01:50 is incredibly well explained. Thanks for this
                    amazing tutorial! 🔥
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
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

              {/* <!-- Comment 2 --> */}
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">S</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">
                      @sarah_codes
                    </span>
                    <span className="text-sm text-gray-500">5 hours ago</span>
                  </div>
                  <p className="text-gray-900 dark:text-white mb-2">
                    Been following along and this course is pure gold! The
                    practical examples make everything so clear. Bookmarked for
                    future reference.
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          strokeWidth="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.60L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <span>89</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <svg
                        className="w-4 h-4 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          strokeWidth="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.060L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <span>1</span>
                    </button>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended videos sidebar */}
      <div className="w-80 xl:w-96 p-4 hidden lg:block">
        <div className="space-y-3">
          {/* Up next */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Up next
              </h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Autoplay
              </button>
            </div>

            {/* Next video */}
            <div className="flex space-x-2 cursor-pointer group mb-4">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  15:32
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  Advanced React Hooks - useContext, useReducer & Custom Hooks
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  TechCourse
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  892K views • 3 days ago
                </p>
              </div>
            </div>
          </div>

          {/* Related videos */}
          <div className="space-y-3">
            {/* Video 1 */}
            <div className="flex space-x-2 cursor-pointer group">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  12:45
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  JavaScript Async/Await vs Promises - Complete Guide
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  CodeMaster
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  1.2M views • 1 week ago
                </p>
              </div>
            </div>
            {/* <!-- Video 2 --> */}
            <div className="flex space-x-2 cursor-pointer group">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-green-400 to-blue-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  8:21
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  CSS Grid Layout Tutorial - Master Grid in 8 Minutes
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  DesignPro
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  756K views • 4 days ago
                </p>
              </div>
            </div>
            Video 3
            <div className="flex space-x-2 cursor-pointer group">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  22:18
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  Node.js Full Course - Build REST APIs from Scratch
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Backend Bootcamp
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  2.1M views • 2 weeks ago
                </p>
              </div>
            </div>
            {/* <!-- Video 4 --> */}
            <div className="flex space-x-2 cursor-pointer group">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-red-400 to-pink-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  16:42
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  Git and GitHub Tutorial for Beginners - Version Control
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  DevTools Academy
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  1.8M views • 5 days ago
                </p>
              </div>
            </div>
            {/* <!-- Video 5 --> */}
            <div className="flex space-x-2 cursor-pointer group">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  19:55
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  Responsive Web Design - Mobile First Approach
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  WebDesign Pro
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  934K views • 1 week ago
                </p>
              </div>
            </div>
            {/* <!-- Video 6 --> */}
            <div className="flex space-x-2 cursor-pointer group">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-teal-400 to-green-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  13:27
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  MongoDB Crash Course - NoSQL Database Tutorial
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Database Hub
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  687K views • 3 days ago
                </p>
              </div>
            </div>
            {/* <!-- Video 7 --> */}
            <div className="flex space-x-2 cursor-pointer group">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-pink-400 to-red-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  11:33
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  VS Code Tips and Tricks for Web Developers
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Productivity Hacks
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  1.5M views • 6 days ago
                </p>
              </div>
            </div>
            {/* <!-- Video 8 --> */}
            <div className="flex space-x-2 cursor-pointer group">
              <div className="relative w-40 flex-shrink-0">
                <div className="video-thumbnail bg-gradient-to-br from-gray-400 to-blue-500 rounded-lg"></div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  25:14
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 mb-1">
                  TypeScript for Beginners - Complete Tutorial 2025
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  TypeScript Masters
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  1.1M views • 1 week ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WatchVideo;
