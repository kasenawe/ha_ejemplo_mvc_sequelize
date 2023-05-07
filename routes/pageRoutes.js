const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/", pageController.showHome);
router.get("/sobre-nosotros", pageController.showAboutUs);
router.get("/articles", pageController.showArticles);

module.exports = router;
