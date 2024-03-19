const express = require('express');
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const isLoggedIn = require('../middleware/userAuth');
const jwtSecret = process.env.JWT_SECRET;

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({
            name, email,
            password: bcrypt.hashSync(password, bcryptSalt)
        });
        res.status(201).json(newUser);
    } catch (e) {
        res.status(422).json(e);
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user)
            return res.status(404).json("User not Exist");
        const passOk = bcrypt.compareSync(password, user.password);
        if (!passOk)
            return res.status(422).json("Wrong Password");
        jwt.sign({ email: email, name: user.name, id: user._id }, jwtSecret, {}, (err, token) => {
            if (err)
                throw err;
            res.cookie('token', token).json(user);
        })
    } catch (err) {
        res.status(422).json(err.message);
    }
})

router.get('/profile', isLoggedIn, async (req, res) => {
    try {
        //console.log(req)
        res.json(req.user);
    } catch (err) {
        res.json(err.message);
    }
})

module.exports = router;
