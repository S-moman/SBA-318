// Creating routes to clean up code
// Import express again
import express from "express";
// Create & call the router
const router = express.Router();
// Import services from data folder
import services from "../data/services.js";

// Service router path
router
  .route("/")
  .get((req, res) => {
    res.json(services);
  });

  // Services path by serviceId
  router
  .route('/:serviceId')
  .get((req, res) => {
    const service = services.find((s) => s.serviceId == req.params.serviceId);
    if (service) res.json(service);
    else next();
  })
  .patch((req, res, next) => {
    const service = services.find((service) => services.serviceId = req.params.serviceId)
    services.serviceId == req.params.serviceId;
    if (service) res.json(service);
    else next();
  })
  .delete((req, res, next) => {
    const service = services.find((service) => services.serviceId = req.params.serviceId)
     const results = service.deleteOne(req.params.serviceId);
    res.json(results);
  });;

// Export router
export default router;
