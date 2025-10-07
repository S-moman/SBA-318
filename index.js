// Download & import express
import express from 'express';
// Connect it to your app
const app = express();
// Listen to it on a port
const port = 3000;
// Import routes
import userRoutes from './routes/users.js'
import postsRoutes from './routes/posts.js'
// Call the routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postsRoutes);
// Turn info into JSON
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


// Error middleware
app.use((req, res) => {
    res.status(404);
    res.send('ERROR!! Page Not Found')
})

// Listening function
app.listen(port, () => {
    console.log(`Listening on port: ${port}, we are in buiness!`)
})