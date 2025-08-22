import React from "react";
import { useContext } from "react";
import PostsContext from "../context/PostsContext";
import PostCard from "./PostCard";

const PostList = () => {
  const { posts, likePost, deletePost } = useContext(PostsContext);

  const handleLike = (postId) => {
    likePost(postId);
  };

  const handleDelete = (postId) => {
    deletePost(postId);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleLike={handleLike}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default PostList;
