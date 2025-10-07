// Creating routes to clean up code
// Import express again
import express from 'express';
// Create & call the router
const router = express.Router()
// Import posts from data folder
import posts from '../data/posts.js'

// Posts path
router.get('/', (req, res) => {
    res.json(posts)
})






// Export router
export default router
