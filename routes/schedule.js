// Import express again
import express from "express";
// Create & call the router
const router = express.Router();
// Import services from data folder
import schedule from "../data/schedule.js";

router
.route('/')
 .get((req, res) => {
    res.json(schedule)
});

router
  .route('/:scheduleId')
  .get((req, res) => {
    const appointment = schedule.find((a) => a.scheduleId == req.params.scheduleId);
    if (appointment) res.json(appointment);
    else next();
  })




// Export router
export default router