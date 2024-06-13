const express = require('express')
const zod = require('zod');
const { Todo } = require('../db');

const router = express.Router();

const todoBody = zod.object({
    title: zod.string(),
    description: zod.string()
})

router.post('/todo', async (req, res) => {
    const {success} = todoBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    await Todo.create({
        title: req.body.title,
        description: req.body.description
    })

    res.json({
        message: "Todo added successfully"
    })
})

module.exports = router;