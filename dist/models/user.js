import mongoose from "mongoose";
import validator from 'validator';
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "please provide a valid id"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "please enter name"],
        unique: [true, "please exist userame"],
    },
    email: {
        type: String,
        required: [true, "please enter email"],
        unique: [true, "Already exist Email"],
        validate: validator.default.isEmail,
    },
    password: {
        type: String,
        required: [true, "please enter password"],
        default: "demopass123",
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "please enter your gender"],
    },
    dob: {
        type: Date,
        required: [true, "please enter your dob"],
    },
}, {
    timestamps: true,
});
export const User = mongoose.model('User', schema);
