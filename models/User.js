const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: '',
    },
    
},
    { timestamps: true }
);

// Apply the uniqueValidator plugin to userSchema.
UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);