import React, { useContext, useState } from "react";
import PostsContext from "../context/PostsContext";
import { Upload, X } from "lucide-react";

const PostForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({ caption: "", image: null });
  const [imagePreview, setImagePreview] = useState(null);
  const { addNewPost } = useContext(PostsContext);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddPost = () => {
    if (formData.caption.trim() && formData.image) {
      setLoading(true);
      addNewPost(formData)
        .then(() => {
          setLoading(false);
          setFormData({ caption: "", image: null });
          setImagePreview(null);

          // close modal
          closeModal?.();
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };
  return (
    <div className="p-6 space-y-6">
      {/* Caption Input */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Caption
        </label>
        <textarea
          value={formData.caption}
          onChange={(e) =>
            setFormData({ ...formData, caption: e.target.value })
          }
          placeholder="What's on your mind?"
          className="w-full p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          rows="3"
          required
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Upload Image
        </label>
        {!imagePreview ? (
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-3 text-gray-400" />
              <p className="text-sm font-medium text-gray-600">
                Click to upload image
              </p>
              <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              required
            />
          </label>
        ) : (
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-40 object-cover rounded-xl"
            />
            <button
              type="button"
              onClick={() => {
                setImagePreview(null);
                setFormData((prev) => ({ ...prev, image: null }));
              }}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleAddPost}
        disabled={!formData.caption.trim() || !formData.image || loading}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200"
      >
        Share Post
      </button>
    </div>
  );
};

export default PostForm;
