const mongoose = require('mongoose');

// schema = a blueprint of feilds a user is made of

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    meta: {
        age: Number,
        website: String
    },
    website: String
});


const User = mongoose.model('User', userSchema);

module.exports = User;