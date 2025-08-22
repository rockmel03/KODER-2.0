import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  createNewPostAsync,
  fetchPostsAsync,
  likePostAsync,
  deletePostAsync,
} from "../api/postsApi";
import toast from "react-hot-toast";

const PostsContext = createContext({});

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  const addNewPost = async (data) => {
    const toastId = toast.loading("Creating post...");
    try {
      const response = await createNewPostAsync(data);
      toast.success("Post created successfully", { id: toastId });
      setPosts((prev) => [...prev, response.data]);
    } catch (error) {
      toast.error(error.response?.data?.error || "failed to create post", {
        id: toastId,
      });
    }
  };

  const likePost = async (postId) => {
    const toastId = toast.loading("Liking post...");
    try {
      const response = await likePostAsync(postId);
      toast.success("Post liked successfully", { id: toastId });
      setPosts((prev) =>
        prev.map((post) =>
          post._id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      );
    } catch (error) {
      toast.error(error.response?.data?.error || "failed to like post", {
        id: toastId,
      });
    }
  };

  const deletePost = async (postId) => {
    const toastId = toast.loading("Deleting post...");
    try {
      const response = await deletePostAsync(postId);
      toast.success("Post deleted successfully", { id: toastId });
      setPosts((prev) => prev.filter((post) => post._id !== postId));
    } catch (error) {
      toast.error(error.response?.data?.error || "failed to delete post", {
        id: toastId,
      });
    }
  };

  useEffect(() => {
    if (!posts) {
      fetchPostsAsync().then((res) => setPosts(res.data));
    }
  }, [posts]);

  return (
    <PostsContext.Provider value={{ posts, addNewPost, likePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
