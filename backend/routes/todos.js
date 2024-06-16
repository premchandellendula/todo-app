const express = require('express')
const zod = require('zod');
const { Todo, User } = require('../db');
const { authMiddleware } = require('../middleware');

const router = express.Router();

const todoBody = zod.object({
    title: zod.string(),
    description: zod.string()
})

router.post('/todo', authMiddleware, async (req, res) => {
    try{
        const {success} = todoBody.safeParse(req.body);

        if(!success){
            return res.status(411).json({
                message: "Incorrect inputs"
            })
        }

        const todo = await Todo.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.userId
        })

        await User.findByIdAndUpdate(req.userId, {
            $push: {todos: todo._id}
        })

        res.json({
            message: "Todo added successfully",
            todo
        })
    }catch(err){
        res.status(400).json({
            message: "error"
        })
    }
})

router.get('/todo', authMiddleware, async (req, res) => {
    const todos = await Todo.find({userId : req.userId})

    res.json({
        todos
    })
})

router.delete('/todo', authMiddleware, async (req, res) => {
    const todoId = req.query.todoId;

    try {
        const deletedTodo = await Todo.findByIdAndDelete(todoId);

        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        await User.updateMany(
            { todos: todoId },
            { $pull: { todos: todoId } }
        );

        res.json({
            message: "Deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Server error" });
    }
})

module.exports = router;