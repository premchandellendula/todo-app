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

module.exports = router;