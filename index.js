import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js'; // lấy posts từ file /routers/posts.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app= express();
const PORT = process.env.PORT || 5000;
const URI =process.env.DATABASE_URL;

app.use(bodyParser.json({limit:'30mb'})); //để có thể đọc được các dữ liệu từ req.body giới hạn limit:'30mb'
app.use(bodyParser.urlencoded({extended:true, limit:'30mb'}));
app.use(cors()); // ngăn chặn mã độc

//localhost:5000/posts
app.use('/posts',posts);

// kết nối database
mongoose.connect(URI,{useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>{
        console.log("Connected to DB");
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) =>{
        console.log('err',err);
    });

