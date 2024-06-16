const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://premcellendula:YD8kZCioZ5pKYbfr@cluster0.sur9all.mongodb.net/todo-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase server selection timeout
    socketTimeoutMS: 45000, // Increase socket timeout
  });

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
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }]
})

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: "pending"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const User = mongoose.model('User', userSchema);
const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    User,
    Todo
}