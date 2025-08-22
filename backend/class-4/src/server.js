import "./config/dotenvConfig.js"
import app from "./app.js";
import { connectDB } from "./db/index.js";

const PORT = process.env.PORT;

connectDB()
  .then(
    app.listen(PORT, () => console.log(`server is listning on port ${PORT}`))
  )
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
