let router = require("express").Router();
let tourController = require("../controllers/tourController");

//POST add location to a Tour
router.post("/:tourId/location", tourController.createNewLocation);

//DELETE single location
router.delete(
  "/:tourId/location/:locationId",
  tourController.deleteSingleLocation
);

//UPDATE single location
router.patch(
  "/:tourId/location/:locationId",
  tourController.updateSingleLocation
);

//GET  all tours
router.get("/", tourController.getAllTours);

//POST create tour
router.post("/", tourController.createTour);

//GET single tour
router.get("/:tourId", tourController.getSingleTour);

//DELETE single tour
router.delete("/:tourId", tourController.deleteSingleTour);

//PATCH update a tour
router.patch("/:tourId", tourController.updateSingleTourById);

module.exports = router;
