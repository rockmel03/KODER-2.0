import express from "express";
import { updload } from "../config/multer.js";
import {
  createPost,
  getAllPosts,
  deletePost,
  getPostById,
  likePost,
} from "../contollers/post.controller.js";

const router = express.Router();

router.route("/").get(getAllPosts).post(updload.single("image"), createPost);

router.route("/:id").get(getPostById).delete(deletePost);

router.route("/:id/like").post(likePost);

export default router;
