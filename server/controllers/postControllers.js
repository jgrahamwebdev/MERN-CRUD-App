
import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

//API Route for ALL posts
//@route: GET /posts
//@access Public
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({})

    res.json(posts)
})

//API Route for ONE post
//@route: GET /posts/:id
//@access Public
const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        res.json(post)
    } else {
        res.status(404)
        throw new Error('Post not found')
    }
})

//DELETE an post
//@route: DELETE /posts/:id
//@access Private
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        await post.deleteOne()
        res.json({ message: 'Post Removed' })
    } else {
        res.status(404)
        throw new Error('Post not found')
    }
})

//CREATE a post
//@route: POST /post
//@access Private/Admin
const createPost = asyncHandler(async (req, res) => {
    const post = new Post({
        title: 'Sample Title',
        author: 'Sample Author',
        date: 'March 8, 2023',
        description: 'Sample Description'
    })

    const createdPost = await post.save()
    res.status(201).json(createdPost)
})

//UPDATE a post
//@route: PUT /posts/:id
//@access Private
const updatePost = asyncHandler(async (req, res) => {
    const {
        title, author, date, description
    } = req.body

    const post = await Post.findById(req.params.id)

    if(post) {
        post.title = title
        post.author = author
        post.description = description
        post.date = date

        const updatedPost = await post.save()
        res.json(updatedPost)
    } else {
        res.status(404)
        throw new Error('Post not found')
    }
})

export { getPosts, getPostById, deletePost, createPost, updatePost }