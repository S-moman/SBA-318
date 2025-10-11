// Creating routes to clean up code
// Import express again
import express from "express";
// Create & call the router
const router = express.Router();
// Import users from data folder
import users from "../data/users.js";

// Users path
router
  .route("/")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    req.body.id = users[users.length - 1].id + 1;
    users.push(req.body);
    res.json(req.body);
  })
  .delete((req, res, next) => {
    const user = users.find((u, i) => {
        if (u.id == req.params.id) {
            users.splice(i, 1);
        }
        return true
      }
    );
    if(user) res.json(user);
    else next()
    
  });
  

// Export router
export default router;
