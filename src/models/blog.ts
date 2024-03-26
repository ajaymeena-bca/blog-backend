import mongoose from "mongoose";

const  schema = new mongoose.Schema(
    {
       
        
        title:{
            type: String,
            required: [true,"please enter title of blog"],
        },
        context:{
            type: String,
            required: [true,"please enter email"],
        },

        category: {
             type: String,
             required: [true,"please enter category"],
        },
        user:{
            type: String,
            ref: 'User',
       },

    },
    {
       timestamps: true,
    }
);



export const Blog = mongoose.model('Blog',schema);