const express = require("express");

const airplaneRoutes = require("./airplane-routes")
const cityRoutes = require("./city-routes")

const router = express.Router();

// airplane routes
router.use("/airplanes", airplaneRoutes)

// city routes
router.use("/city", cityRoutes )

module.exports = router;