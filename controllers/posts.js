import { PostModel } from "../models/PostModel.js";

export const getPosts = async(req,res) =>{
    try {
        const post = new PostModel({
            title:'test',
            content:'test'
        });
        post.save();
        const posts = await PostModel.find();// lấy hết dữ liệu
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({error:err});
    }
}

export const createPost =async (req,res)=>{
    try {
        const newPort = req.body;
        const post = new PostModel(newPort);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({error:err});
    }
}
export const updatePost = async (req,res)=>{
    try {
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({_id:updatePost._id},updatePost,{new :true});
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({error:err});
    }
}