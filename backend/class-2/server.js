require("dotenv").config({ override: true });
const app = require("./src/app");
const { connectDB } = require("./src/db");

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`server is listning on port :${port}`));
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
