import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside
        id="sidebar"
        className="w-full h-full bg-white dark:bg-gray-900 sidebar-transition z-40 md:translate-x-0"
      >
        <div className="p-4 space-y-1">
          {/* <!-- Main Navigation --> */}
          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center space-x-6 px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              <span className="font-medium">Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-6 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536M9 13h6m-6 0V9a3 3 0 013-3h0a3 3 0 013 3v4M9 13v6a1 1 0 001 1h4a1 1 0 001-1v-6M9 13H7a1 1 0 00-1 1v6a1 1 0 001 1h2"
                />
              </svg>
              <span>Shorts</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-6 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span>Subscriptions</span>
            </a>
          </div>

          <hr className="border-gray-200 dark:border-gray-700 my-4" />

          {/* <!-- You section --> */}
          <div className="space-y-1">
            <h3 className="px-3 text-gray-900 dark:text-white font-medium">
              You
            </h3>
            <a
              href="#"
              className="flex items-center space-x-6 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>History</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-6 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span>Your videos</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-6 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Watch later</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-6 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>Liked videos</span>
            </a>
          </div>
        </div>
      </aside>

      {/* <!-- Sidebar overlay for mobile --> */}
      <div
        id="sidebarOverlay"
        className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden hidden"
      ></div>
    </>
  );
};

export default Sidebar;
