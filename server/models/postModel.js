
import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
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
}, { timesttamps: true })

const Post = mongoose.model("Post", postSchema);

export default Post