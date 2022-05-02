const router = require('express').Router();
const Category = require('../models/Category');

// Post
router.post('/', async (request, response) => {
    const newCat = new Category(request.body);
    try {
        const savedCat = await newCat.save();
        response.status(200).json(savedCat);
    } catch (err) {
        response.status(500).json(err);
    }
})

// Get
router.get('/', async (request, response) => {
    try {
        const categories = await Category.find();
        response.status(200).json(categories);
    } catch (err) {
        response.status(500).json(err);
    }
})

module.exports = router;