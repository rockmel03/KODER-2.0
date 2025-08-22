import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  caption: { type: String, require: true },
  image: {
    url: { type: String, require: true },
    fileId: { type: String, require: true },
  },
  likes: { type: Number, default: 0 },
  userIP: String,
});

const Post = mongoose.model("Post", postSchema);
export default Post;
