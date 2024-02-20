const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get('/api/users', (req, res) => {
    const users = [
        {username: 'user1', password: 'password1'},
        {username: 'user2', password: 'password2'},
        {username: 'user3', password: 'password3'}
    ]
    res.json(users)
})

app.post('/api/users', (req, res) => {
    const {username, password}= req.body;
    const newUser = {username, password};
    res.json(newUser)
})

app.post('/api/login', (req, res) => {
    const {username, password}= req.body;
    res.send('Welcome, ' + username)
})