const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/", pageController.showHome);
router.get("/sobre-nosotros", pageController.showAboutUs);
router.get("/contacto", pageController.showContact);

module.exports = router;
