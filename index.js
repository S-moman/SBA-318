// Download & import express
import express from 'express';
// Connect it to your app
const app = express();
// Listen to it on a port
const port = 3000;

// Middleware for the time & type of request
app.use((req, res, next) => {
    const time = new Date();
    console.log( `------------------------
        ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.
     `);
    //  if (Object.keys(req.body).length > 0) {
    //     console.log("Containing the data:")
    //     console.log(`${JSON.stringify(req.body)}`);
    //  }
        next()
})
// Import routes
import userRoutes from './routes/users.js'
import servicesRoutes from './routes/services.js'
import scheduleRoutes from './routes/schedule.js'
// Turn info into JSON
app.use(express.json())
// Call the routes
app.use('/api/users', userRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/schedule', scheduleRoutes);



// Home path
app.get('/', (req, res) => {
    res.send('We are live! Welcome to my API!!!')
});


// Error middleware
app.use((error, req, res, next) => {
    res.status(404);
    res.send('ERROR!! Page Not Found')
})

// Listening function
app.listen(port, () => {
    console.log(`Listening on port: ${port}, we are in buiness!`)
})