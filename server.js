// server.js
import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

/* ------------------ POST ROUTES ------------------ */

// ✅ Create a new user
app.post("/user", async (req, res) => {
  try {
    const { email, name, role } = req.body;
    const user = await prisma.user.create({
      data: { email, name, role },
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Create a new post
app.post("/post", async (req, res) => {
  try {
    const { title, authorId } = req.body;
    const post = await prisma.post.create({
      data: { title, authorId },
    });
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* ------------------ GET ROUTES ------------------ */

// ✅ Get all users (with posts)
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { posts: true },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all posts (with author)
app.get("/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true },
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------ LIKE ROUTES ------------------ */

// ✅ Like a post
app.post("/like", async (req, res) => {
  try {
    const { userId, postId } = req.body;
    const like = await prisma.like.create({
      data: { userId, postId },
    });
    res.json(like);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all likes (with user & post info)
app.get("/likes", async (req, res) => {
  try {
    const likes = await prisma.like.findMany({
      include: { user: true, post: true },
    });
    res.json(likes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------ COMMENT ROUTES ------------------ */

// ✅ Create a comment on a post
app.post("/comment", async (req, res) => {
  try {
    const { userId, postId, content } = req.body;
    const comment = await prisma.comment.create({
      data: { userId, postId, content },
    });
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all comments (with user & post info)
app.get("/comments", async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      include: { user: true, post: true },
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------ FOLLOW ROUTES ------------------ */

// ✅ Follow a user
app.post("/follow", async (req, res) => {
  try {
    const { followerId, followingId } = req.body;
    if (followerId === followingId) {
      return res.status(400).json({ error: "You cannot follow yourself!" });
    }
    const follow = await prisma.follow.create({
      data: { followerId, followingId },
    });
    res.json(follow);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all followers/following relationships
app.get("/follows", async (req, res) => {
  try {
    const follows = await prisma.follow.findMany({
      include: {
        follower: true,
        following: true,
      },
    });
    res.json(follows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/categories", async (req, res) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({
      data: { name }
    });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get All Categories (GET)
app.get("/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------ START SERVER ------------------ */
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
