import express from "express";
import { deleteBlog, getAllBlog, getCategories, getLatest, getSingleBlog, newBlog } from "../controllers/blog.js";
import { Blog } from "../models/blog.js";
const app = express.Router();
app.post("/", async (req, res) => {
    const newBlog = await Blog.create({
        title: "this is title",
        context: "blog",
        category: "cd",
        user: "ajay"
    });
    res.status(200).json({
        success: true,
        message: "success acess blog api"
    });
});
// Route /api/v1/blog/new ---- to create a new blog
app.post('/new', newBlog);
// Route /api/v1/blog/all ---- to get all blogs
app.get('/all', getAllBlog);
// Route /api/v1/blog/new ---- to get lasted blog
app.get('/latest', getLatest);
// Route /api/v1/blog/categories ---- to get lasted blog
app.get('/categories', getCategories);
app.route("/:id").get(getSingleBlog).delete(deleteBlog);
export default app;
