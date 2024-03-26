import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";
import { Blog } from "../models/blog.js";
export const newBlog = TryCatch(async (req, res, next) => {
    const { title, context, category } = req.body;
    if (!title)
        return next(new ErrorHandler("title is required", 400));
    if (!context)
        return next(new ErrorHandler("context is required", 400));
    if (!category)
        return next(new ErrorHandler("category is required", 400));
    const newBlog = await Blog.create({
        title,
        context,
        category
    });
    res.status(200).json({
        success: true,
        message: "Your blog blog has been created"
    });
});
export const getAllBlog = TryCatch(async (req, res, next) => {
    const blogs = await Blog.find({});
    if (blogs.length == 0)
        return next(new ErrorHandler("Blogs are not exist", 400));
    res.status(200).json({
        success: true,
        blogs
    });
});
export const getLatest = TryCatch(async (req, res, next) => {
    const blogs = await Blog.find({}).limit(5).sort({ createdAt: -1 });
    if (blogs.length == 0)
        return next(new ErrorHandler("Blogs are not exist", 400));
    res.status(200).json({
        success: true,
        blogs
    });
});
export const getCategories = TryCatch(async (req, res, next) => {
    const categories = await Blog.distinct("category");
    if (categories.length == 0)
        return next(new ErrorHandler("category are not exist", 400));
    res.status(200).json({
        success: true,
        categories
    });
});
export const getSingleBlog = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog)
        return next(new ErrorHandler("Blog not found", 404));
    res.status(200).json({
        success: true,
        blog
    });
});
// export const updateBlog = TryCatch(async(req:Request<{},{},UpdateBlogRequestBody>,res,next)=>{
//       const{id} = req.params;
//       const blog = await Blog.findById(id);
//       if(!blog) return next(new ErrorHandler("Blog not found",404));
//       res.status(200).json({
//           success: true,
//       });
// });
export const deleteBlog = TryCatch(async (req, res, next) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog)
        return next(new ErrorHandler("Blog not found", 404));
    blog.deleteOne();
    res.status(200).json({
        success: true,
        message: "blog deleted successfully"
    });
});
