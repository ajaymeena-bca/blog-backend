import mongoose from "mongoose";
const schema = new mongoose.Schema({
    context: {
        type: String,
        required: [true, "please enter title of blog"],
    },
    blog: {
        type: mongoose.Types.ObjectId,
    },
    user: {
        type: String,
        ref: 'User',
    },
}, {
    timestamps: true,
});
export const Comment = mongoose.model('Comment', schema);
