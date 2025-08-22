import multer from "multer";

export const updload = multer({
  storage: multer.memoryStorage(),
});
