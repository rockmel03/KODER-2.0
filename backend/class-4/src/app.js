import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",");
app.use(
  cors({
    origin: function (origin, callback) {
      if (
        allowedOrigins?.includes(origin) ||
        (process.env.NODE_ENV !== "production" && !origin)
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"), false);
      }
    },
  })
);

import postRouter from "./routes/post.routes.js";

app.use("/api/posts", postRouter);

export default app;
