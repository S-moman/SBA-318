// Creating routes to clean up code
// Import express again
import express from 'express';
// Create & call the router
const router = express.Router()
// Import users from data folder
import users from '../data/users.js'


// Users path
router.get('/', (req, res) => {
    res.json(users);
});






// Export router
export default router