import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique:true,
    },
    image: {
        type: String,
        default: "https://thelifecode.net/wp-content/uploads/2019/03/what-is-a-blog-and-how-is-it-different-from-a-website-explained.png",
    },
    category:{
        type:String,
        default:'uncategorized',
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema);

export default Post;