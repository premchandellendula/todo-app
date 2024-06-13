const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://premcellendula:YD8kZCioZ5pKYbfr@cluster0.sur9all.mongodb.net/todo-app");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 11,
        maxLength: 50,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}