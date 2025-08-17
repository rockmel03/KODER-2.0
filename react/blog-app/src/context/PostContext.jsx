import React, { useState } from "react";
import blogPosts from "../Data/posts.json";

const PostContext = React.createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(blogPosts || []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;

export const usePosts = () => React.useContext(PostContext);
