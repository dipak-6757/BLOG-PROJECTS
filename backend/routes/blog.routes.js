const express = require("express");

const blogRoutes = express.Router();

const {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/blogController');


blogRoutes.get('/get', getAllPosts);
blogRoutes.get('/create', createPost);
blogRoutes.get('/update/:id', updatePost);
blogRoutes.get('/delete/:id', deletePost);
module.exports = blogRoutes;