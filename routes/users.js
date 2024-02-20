const express = require('express');
const router = express.Router();

let users = []

router.get('/', (req, res) => {
    res.json(users)
})

router.post('/', (req, res) => {
    const {username, password}= req.body;
    const newUser = {username, password};
    users.push(newUser);
    res.status(201).json({username})
})

router.post(/login, (req, res) => {
    const {username, password}= req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if(user) {
        res.json({message: 'Welcome!'})
    } else {
        res.status(401).json({message: 'Invalid credentials'})
    }
})

module.exports = router