// Download & import express
import express from 'express';
// Connect it to your app
const app = express();
// Listen to it on a port
const port = 3000;
// Imort users & post from data folder
import users from './data/users.js';
import posts from './data/posts.js';
// Turn infor into JSON
app.use(express.json())

// Middleware for the time & type of request
app.use((req, res, next) => {
    const time = new Date();
    console.log( `------------------------
        ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.
        `);
        next()
})

// Home path
app.get('/', (req, res) => {
    res.send('We are live! Welcome to my API!!!')
});

// Users path
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Posts path
app.get('/api/posts', (req, res) => {
    res.json(posts)
})


app.use((req, res) => {
    res.status(404);
    res.send('ERROR!! Page Not Found')
})

// Listening function
app.listen(port, () => {
    console.log(`Listening on port: ${port}, we are in buiness!`)
})