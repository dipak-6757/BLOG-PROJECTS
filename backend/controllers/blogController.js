const blogmodel = require('../models/blog');


// GET all posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await blogmodel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts', error });
    }
};

// POST create new post
const createPost = async (req, res) => {
    const { title, author, content, tags } = req.body;
    try {
        const newPost = new blogmodel({ title, author, content, tags });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create post', error });
    }
};

// PUT update post by ID
const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, author, content, tags } = req.body;
    try {
        const updatedPost = await blogmodel.findByIdAndUpdate(
            id,
            { title, author, content, tags },
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update post', error });
    }
};

// DELETE post by ID
const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPost = await blogmodel.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete post', error });
    }
};

module.exports = {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
};
