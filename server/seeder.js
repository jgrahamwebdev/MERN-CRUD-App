
import mongoose from "mongoose";
import dotenv from "dotenv";
import posts from "./data/posts.js";
import Post from "./models/postModel.js";
import connectDB from "./config/db.js";

dotenv.config()
connectDB()

//IMPORT DATA
const importData = async () => {
    try {
        await Post.deleteMany()

        const samplePosts = posts.map((post) => {
            return { ...post}
        })
        await Post.insertMany(samplePosts)

        console.log('Data imported successfully! ✅')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

//DESTORY DATA
const destroyData = async () => {
    try {
        await Post.deleteMany()

        console.log('Data Destroyed! ⛔️')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}




