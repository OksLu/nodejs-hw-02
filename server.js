const app = require("./app");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const { MONGODB_URL, PORT } = process.env;
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
