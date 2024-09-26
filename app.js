// app.js
const express = require("express");
const postsRouter = require("./routes/posts");
const commentsRouter = require("./routes/comments");
const documentationRouter = require("./routes/documentation"); // Import documentation router
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);
app.use("/docs", documentationRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
