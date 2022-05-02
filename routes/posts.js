const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Create post
router.post('/', async(request, response) => {
    const newPost = new Post(request.body);
    
    try {
        const savedPost = await newPost.save();
        response.status(200).json(savedPost);
    } catch (err) {
        response.status(500).json(err);
    }
});

// Update post
router.put('/:id', async(request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        if (post.username === request.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(request.params.id,
                    {
                        $set: request.body,
                    },
                    { new: true }
                );
                response.status(200).json(updatedPost);
            } catch (err) {
                response.status(500).json(err);
            }
        } else {
            response.status(401).json('You can only update your own posts')
        }
    } catch (err) {
        response.status(500).json(err);
    }
});

// Delete post
router.delete('/:id', async(request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        if (post.username === request.body.username) {
            try {
                await post.delete()
                response.status(200).json('Post deleted');
            } catch (err) {
                response.status(500).json(err);
            }
        } else {
            response.status(401).json('You can only delete your own posts')
        }
    } catch (err) {
        response.status(500).json(err);
    }
});

// Get post
router.get('/:id', async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        response.status(200).json(post);
    } catch (err) {
        response.status(500).json(err);
    }
})

// Get all posts
router.get('/', async (request, response) => {
    const username = request.query.user;
    const category = request.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({username})
        } else if (category) {
            posts = await Post.find({categories:{
                $in: [category]
            }})
        } else {
            posts = await Post.find();
        }
        response.status(200).json(posts);
    } catch (err) {
        response.status(500).json(err);
    }
})

module.exports = router;