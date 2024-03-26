import express from "express";
import { isAdmin } from "../middlewares/auth.js";
import { allComment, deleteComment, getSingle, newComment, singleBlogComment, updateComment } from "../controllers/comment.js";
import { getSingleBlog } from "../controllers/blog.js";

const app = express.Router();


app.get("/", async(req, res) => {

          res.status(200).json({
          success: true,
          message: "success acess comment api"
     });
});




// Route /api/v1/comment/new ---- to create a new comment on the blog
app.post('/new', newComment);

//Route /api/v1/comment/all --- to get all comments 
app.get('/all', allComment);

// Route /api/v1/comment/blog ---- to get a all comment on specific blog
app.get('/blog', singleBlogComment)


// Route /api/v1/comment/DyamicId ---- to get read,update,delete a singel comment
app.route('/:id').get(getSingle).put(updateComment).delete(deleteComment);




export default app;