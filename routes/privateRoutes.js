const express = require("express");

const router = express.Router();
const pageController = require("../controllers/pageController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/admin", pageController.admin);

module.exports = router;
