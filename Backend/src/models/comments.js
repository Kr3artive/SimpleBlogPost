import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    body:{
        type: String
    }
})
const Comment = mongoose.model("Comment", commentSchema)
export default Comment