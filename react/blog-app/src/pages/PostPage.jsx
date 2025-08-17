import React from "react";
import { useParams } from "react-router";
import Post from "../components/Post";
import { usePosts } from "../context/PostContext";

const PostPage = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((p) => p.id == id);

  console.log(posts);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Post data={post} />
    </div>
  );
};

export default PostPage;
