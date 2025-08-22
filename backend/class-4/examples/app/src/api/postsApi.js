import axiosInstance from "../config/axios";

export const fetchPostsAsync = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createNewPostAsync = async (data) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    const response = await axiosInstance.post("/posts", formData);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const likePostAsync = async (postId) => {
  try {
    const response = await axiosInstance.post(`/posts/${postId}/like`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deletePostAsync = async (postId) => {
  try {
    const response = await axiosInstance.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
