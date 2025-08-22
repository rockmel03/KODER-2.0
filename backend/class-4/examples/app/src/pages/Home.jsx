import { useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import { Plus, X } from "lucide-react";

const Home = () => {
  const [showAddPost, setShowAddPost] = useState(false);

  const closeAddPostModal = () => {
    setShowAddPost(false);
  };

  const openAddPostModal = () => {
    setShowAddPost(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Social Feed
          </h1>
          <button
            onClick={openAddPostModal}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
          >
            <Plus size={20} />
            New Post
          </button>
        </div>
      </div>

      {/* Posts Container */}
      <PostList />

      {/* Add Post Modal */}
      {showAddPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Create New Post
              </h2>
              <button
                onClick={closeAddPostModal}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <PostForm closeModal={closeAddPostModal}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
