import express from "express";
import {getPosts, createPost, updatePost} from '../controllers/posts.js';
const router = express.Router();
// // localhost:5000/posts
 router.get('/',getPosts);
// // localhost:5000/posts
router.post('/',createPost);
router.post('/update',updatePost);


export default router;