// Download & import express
import express from 'express';
// Connect it to your app
const app = express();
// Listen to it on a port
const port = 3000;
// Imort users from users folder
import users from './data/users.js';
// Turn infor into JSON
app.use(express.json())

// Middleware for the time
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
app.get('/users', (req, res) => {
    res.send(`Display user info here:
        ${users}`)
})




// Listening function
app.listen(port, () => {
    console.log(`Listening on port: ${port}, we are in buiness!`)
})