const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const captainController = require("../controllers/captain.controller")

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
        .isLength({ min: 3 })
        .withMessage("First name must be 3 char long"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("password must be atleast 6 char long"),
    body("vehicle.color")
        .isLength({ min: 3 })
        .withMessage("color must be 3char long"),
    body("vehicle.plate")
        .isLength({ min: 3 })
        .withMessage("plate must be 3char long"),
    body("vehicle.capacity")
        .isInt({ min: 1 })
        .withMessage("capacity must be at least 1"),
    body("vehicle.vehicleType")
        .isIn(["car", "motorcycle", "auto"])
        .withMessage("invalid vechile type"),
],
captainController.registerCaptain);

module.exports = router;
