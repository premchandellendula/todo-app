const express = require('express');
const router = express.Router();
const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const { authMiddleware } = require('../middleware');
const { JWT_SECRET } = require('../config');

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstname: zod.string(),
    lastname: zod.string()
})

router.post('/signup', async (req, res) => {
    const {success} = signupBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken/ user already exists"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })

    let userId = user._id

    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token
    })
})


const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

router.post('/signin', async (req, res) => {
    const {success} = signinBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)

        res.json({
            token
        })

        return
    }

    res.json({
        message: "Error while logging in"
    })
})


const updateBody = zod.object({
    password: zod.string().min(6).optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})

router.put('/', authMiddleware, async (req, res) => {
    const {success} = updateBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, req.body)

    res.json({
        message: "User info updated successfully"
    })
})


router.post('/user/:userId/todos', authMiddleware, async (req, res) => {
    
})
module.exports = router;