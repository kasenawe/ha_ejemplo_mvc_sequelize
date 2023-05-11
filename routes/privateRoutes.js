const express = require("express");

const router = express.Router();
const pageController = require("../controllers/pageController");
const ensureAuthenticated = require("./middleware/ensureAuthenticated");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", ensureAuthenticated, pageController.admin);

module.exports = router;
