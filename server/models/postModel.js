
import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Post = mongoose.model("Post", postSchema);

export default Post