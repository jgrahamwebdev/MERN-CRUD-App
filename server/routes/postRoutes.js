
import express from "express";
import asyncHandler from 'express-async-handler';
import { getPosts, getPostById, deletePost, createPost, updatePost } from "../controllers/postControllers.js";
import Post from "../models/postModel.js";

const router = express.Router()

//Get ALL posts
router.route('/').get(getPosts)

//CREATE a post
router.route('/').post(createPost)

//Get ONE post
router.route('/:id').get(getPostById)

//DELETE a post
router.route('/:id').delete(deletePost)

//UPDATE a post
router.route('/:id').put(updatePost)


export default router