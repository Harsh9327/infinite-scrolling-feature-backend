const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());

const postSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

// app.get('/posts', async (req, res) => {
//     const { page = 1, limit = 10 } = req.query;
//     try {
//         const posts = await Post.find()
//             .sort({ createdAt: -1 })
//             .limit(limit * 1)
//             .skip((page - 1) * limit);
//         res.json(posts);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

app.get('/posts', async (req, res) => {
    const { page = 1, limit = 3 } = req.query;
    try {
        const totalPosts = await Post.countDocuments();
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);
        res.json({ posts, totalPosts });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(process.env.PORT, () => {
    console.log('Server is running on port 5000');
});
