const express = require("express");
const { airplaneMiddleware } = require("../../middlewares")

const { airplaneController } = require("../../controllers")

const router = express.Router();

// api/v1/airplanes POST
router.post("/", airplaneMiddleware.validateCreateAirplane ,airplaneController.createAirplane)

// api/v1/airplanes GET
router.get("/", airplaneController.getAirplanes)

// api/v1/airplane/:id GET
router.get("/:id", airplaneController.getAirplane)

//  api/v1/airplanes/:id Delete
router.delete("/:id", airplaneController.deleteAirplane)

//  api/v1/airplanes/:id Patch
router.patch("/:id", airplaneController.updateAirplane)

module.exports = router;