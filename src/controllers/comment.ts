import { TryCatch } from "../middlewares/error.js";
import { Request } from "express";
import { NewCommentRequestBody } from "../types/types.js";
import ErrorHandler from "../utils/utility-class.js";
import { Comment } from "../models/comment.js";



export const newComment = TryCatch(
async(req:Request<{},{},NewCommentRequestBody>,res,next)=>{
     
    const {id:user} = req.query;
    const {context,blog} = req.body;
    
    if(!context) return next(new ErrorHandler("context is not provided", 400));
    if(!blog) return next(new ErrorHandler("blog refference is not given", 400));

    console.log(context);
    const comment = await Comment.create({
         context,
         blog,
         user,
    });

    return res.status(200).json({
          success:true,
          message:"Comment created successfully",
    });

});



export const allComment = TryCatch(
async(req:Request<{},{},NewCommentRequestBody>,res,next)=>{
     
    const comment = await Comment.find({})
    return res.status(200).json({
          success:true,
          comment
    });

});


export const getSingle = TryCatch(
async(req,res,next)=>{
     
    const{id} = req.params;
    const comment = await Comment.findById(id);
    return res.status(200).json({
          success:true,
          comment
    });

});



export const singleBlogComment = TryCatch(
async(req,res,next)=>{
     
    const {id:blog} = req.query;

    const comment = await Comment.find({blog:blog})

    return res.status(200).json({
          success:true,
          comment,
    });

});



export const deleteComment = TryCatch(
async(req,res,next)=>{
     
    const {id} = req.params;

    const comment = await Comment.deleteOne({_id: id});

    if(!comment) return next(new ErrorHandler("Comment not found", 400));

    return res.status(200).json({
          success:true,
          message:"Comment deleted successfully",
    });

});

export const updateComment = TryCatch(
async(req:Request<{},{},NewCommentRequestBody>,res,next)=>{
    
    const {id} = req.query;
    const{context} = req.body;
    
    const comment = await Comment.findById(id);

    if(!comment) return next(new ErrorHandler("Comment not found",400));

    await Comment.updateOne({_id: id},{
        $set: {context}
    });

    
});







