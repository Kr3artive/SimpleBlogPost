import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    body: {
        type: String,
        required: true
    }
})
const Post = mongoose.model("Post", postSchema)
export default Post