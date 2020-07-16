const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const users = [
    {
        name: 'Alex',
        age: 23,
        sex: '😂',
    },
    {
        name: 'Mary',
        age: 18,
        sex: 'f',
    },
]

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    res.send(users[0]);
})

app.listen(3000);