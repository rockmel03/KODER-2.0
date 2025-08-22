import Post from "../models/post.model.js";
import { deleteFile, uploadFile } from "../services/storage.service.js";
import { v4 as uuid } from "uuid";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    return res.status(200).json({
      message: "posts fetched successfully",
      data: posts,
      status: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "internal server error", status: false });
  }
};

export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    return res.status(200).json({
      message: "post fetched successfully",
      data: post,
      status: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "internal server error", status: false });
  }
};

export const createPost = async (req, res) => {
  const caption = req.body.caption;
  const file = req.file.buffer;
  try {
    if (!(caption && file))
      return res
        .status(400)
        .json({ error: "caption and file are required", status: false });

    const filename = uuid();
    const response = await uploadFile(file, filename);

    if (response) {
      const post = await Post.create({
        caption,
        image: response,
        userIP: req.ip,
      });

      return res.status(201).json({
        message: "post created successfully",
        data: post,
        status: true,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "internal server error", status: false });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post)
      return res
        .status(404)
        .json({ error: "post not found or already deleted", status: false });

    const result = await deleteFile(post.image.fileId);
    if (!result) {
      return res
        .status(500)
        .json({ error: "failed to delete post from storage", status: false });
    }

    const deletedPost = await Post.findByIdAndDelete(postId);

    return res.status(200).json({
      message: "post deleted successfully",
      data: deletedPost || {},
      status: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "internal server error", status: false });
  }
};

export const likePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "post not found", status: false });
    }
    post.likes += 1;
    await post.save();
    return res.status(200).json({
      message: "post liked successfully",
      data: post,
      status: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "internal server error", status: false });
  }
};
