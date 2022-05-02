const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Registration
router.post('/register', async(request, response) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(request.body.password, salt);

        const newUser = new User({
            username: request.body.username,
            email: request.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        response.status(200).json(user);
    } catch(err) {
        response.status(500).json(err);
    }
});

// Login
router.post('/login', async (request, response) => {
    try {
        const user = await User.findOne({username: request.body.username});
        if(!user) {
            return response.status(400).json("Wrong Credentials!")
        };

        const validated = await bcrypt.compare(request.body.password, user.password);
        if(!validated) {
            return response.status(400).json("Wrong Credentials!");
        };

        // Remove password
        const userNoPass = await User.findOne({username: request.body.username}).select("-password");
        response.status(200).json(userNoPass);

    } catch(err) {
        response.status(500).json(err);
    }
})

module.exports = router;